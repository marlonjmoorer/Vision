const FacebookStrategy = require('passport-facebook');
const {facebook} = require('./config');
const {User} = require('../models');

module.exports = {

    strategy: new FacebookStrategy({
        clientID: facebook.clientID,
        clientSecret: facebook.clientSecret,
        callbackURL: facebook.callbackURL
    }, function (token, secret, profile, done) {

        const data={
            token,
            secret,
            profileId:profile.id,
            loginType:"facebook",
            displayName:profile.displayName,
            username:profile.displayName.replace(/\s/g,'')
        }

        User
            .createOrLogin(data)
            .then(u => done(null, u))
    }),
    scope:[ 'user_friends', 'manage_pages']
}
