const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

module.exports = functions.auth.user().onCreate((user) => {
    return console.log(user);
});