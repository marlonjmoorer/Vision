const passport = require('passport');
const GoogleStrategy= require('passport-google-oauth').OAuth2Strategy;
const {google} = require('./config');


module.exports=new GoogleStrategy({
    clientID:google.clientID,
    clientSecret:google.clientSecret,
    callbackURL:google.callbackURL
},function(token, tokenSecret, profile, done) {
    done()
})


