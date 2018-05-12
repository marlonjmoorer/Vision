const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const {google} = require('./config');
const {User} = require('../models');

module.exports = {

    strategy: new GoogleStrategy({
        clientID: google.clientID,
        clientSecret: google.clientSecret,
        callbackURL: google.callbackURL
    }, function (token, tokenSecret, profile, done) {
        User
            .createOrLogin(token, tokenSecret, profile.id, "google")
            .then(u => done(null, u))
    }),
    scope:[ 
        "https://www.googleapis.com/auth/plus.me", 
        "https://www.googleapis.com/auth/userinfo.email", 
        "https://www.googleapis.com/auth/drive",
    ]
}
