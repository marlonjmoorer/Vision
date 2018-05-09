const passport = require('passport');
const GoogleStrategy= require('passport-google-oauth').OAuth2Strategy;
const {google} = require('./config');
const {user} = require('../models');


module.exports=new GoogleStrategy({
    clientID:google.clientID,
    clientSecret:google.clientSecret,
    callbackURL:google.callbackURL
},function(token, tokenSecret, profile, done) {
    user.createOrLogin(token,tokenSecret,profile.id,"google").then(u=>
        done(null,u)
    )
})


