const TwitterStrategy = require("passport-twitter").Strategy
const {twitter} = require('./config');
const {User} = require('../models');

module.exports = {

    strategy: new TwitterStrategy({
        consumerKey: twitter.consumerKey,
        consumerSecret: twitter.consumerSecret,
        callbackURL: twitter.callbackURL
    }, function (token, secret, profile, done) {
        const data={
            token,
            secret,
            profileId:profile.id,
            loginType:"twitter",
            displayName:profile.displayName,
            username:profile.username
        }

        User
            .createOrLogin(data)
            .then(u => done(null, u))
    }),
    scope:[]
}