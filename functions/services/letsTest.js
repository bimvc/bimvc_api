const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const callback = functions.https.onRequest((req, res) => {
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

module.exports = {
    callback
};