const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp('08c0778e8d05d0a8d4545cb66973a4bd-us14');
admin.initializeApp(functions.config().firebase);
const pdf = require('html-pdf');
const certHtml = require('./services/certGenerator/certHtmlString');

exports.onNewUser = functions.auth.user().onCreate(user => {
    const { email } = user;

    return Promise.resolve()
        .then(() => mailchimp.request({
            method : 'post',
            path : '/lists/07583bb04d/members/',
            body : {
                "email_address": email,
                "status": "subscribed",
                "merge_fields": {
                    "FNAME": "Urist",
                    "LNAME": "McVankab"
                }
            },
        }, val => console.log('mailchimp', val)));
});

exports.letsTest = functions.https.onRequest((req, res) => {
    const passData = JSON.parse(req.body.data);
    const { username } = passData;

    db.collection('log').doc().set(passData);

    if (!username) {
        return;
    }

    const user = db.collection('users').doc(username);
    user.get()
        .then(doc => doc.data())
        .then(data => {
            const testPassing = data.testPassing || [];
            testPassing.push(passData);

            return user.update({ testPassing });
        })
        .then(() => res.sendStatus(200))
        .catch(e => e);
});

exports.pdf = functions.https.onRequest((req, res) => {
    const { displayName, courseName, date, result } = req.query;

    pdf
        .create(certHtml({
            displayName,
            courseName,
            date,
            result
        }), {
            orientation: 'landscape'
        }).toStream(function(err, stream){
            stream.pipe(res);
        });
});