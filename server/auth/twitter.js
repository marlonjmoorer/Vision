const passport = require('passport');
const TwitterStrategy= require("passport-twitter").Strategy
const {twitter} = require('./config');
const {user} = require('../models');

module.exports=new TwitterStrategy({
    consumerKey:twitter.consumerKey,
   consumerSecret:twitter.consumerSecret,
    callbackURL:twitter.callbackURL
},function(token, tokenSecret, profile, done) {
    user.createOrLogin(token,tokenSecret,profile.id,"twitter").then(u=>
        done(null,u)
    )
})
