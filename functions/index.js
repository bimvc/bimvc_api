const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp('08c0778e8d05d0a8d4545cb66973a4bd-us14');
admin.initializeApp(functions.config().firebase);

exports.onNewUser = functions.auth.user().onCreate(user => {
    const { email } = user;
    mailchimp.request({
        method : 'post',
        path : '/lists/07583bb04d/members/',
        body : {
            "email_address": email,
            "status": "subscribed"
        },
    }, val => console.log('mailchimp', val))
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