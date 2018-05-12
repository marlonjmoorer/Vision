const passport = require('passport')
const {User} = require('../models');
const express = require('express')
const {generateToken} = require('../utils');

const router= express.Router()

router.use(passport.initialize());
router.use(passport.session());
const providers=["google","twitter","facebook"]

providers.forEach(provider=>{
    const {strategy,scope}=require(`./${provider}`)
    passport.use(strategy)
    router.get(`/${provider}`, passport.authenticate(provider,{ scope }));
    router.get(`/${provider}/callback`,
    passport.authenticate(provider, { failureRedirect: `/auth/${provider}/fail` }),
    function(req, res) {
        const token=generateToken(req.user)
        res.render('auth',{token})
    });
    router.get(`/${provider}/fail`,(req,res)=>{
        res.json(new Error("Authenticaion Failed"))
    })
})
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id).then( user=> {
        done(null, user);
    }).catch(done)
});
    
module.exports=router

