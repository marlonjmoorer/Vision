const FacebookStrategy = require('passport-facebook');
const {facebook} = require('./config');
const {User} = require('../models');

module.exports = {

    strategy: new FacebookStrategy({
        clientID: facebook.clientID,
        clientSecret: facebook.clientSecret,
        callbackURL: facebook.callbackURL
    }, function (token, tokenSecret, profile, done) {
        User
            .createOrLogin(token, tokenSecret, profile.id, "facebook")
            .then(u => done(null, u))
    }),
    scope:[ 'user_friends', 'manage_pages']
}
