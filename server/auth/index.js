const passport = require('passport')
const jwt = require('jsonwebtoken');
const {user} = require('../models');
module.exports=(app)=>{
    app.use(passport.initialize());
    app.use(passport.session());
    const providers=["google","twitter"]

    providers.forEach(provider=>{
        const strategy=require(`./${provider}`)
        passport.use(strategy)
        app.get(`/auth/${provider}`, passport.authenticate(provider,{ scope: ['profile'] }));
        app.get(`/auth/${provider}/callback`,
        passport.authenticate(provider, { failureRedirect: `/auth/${provider}/fail` }),
        function(req, res) {
            // Successful authentication
            if(req.user){
                const{id,profileId}=req.user
                const token=jwt.sign({id,profileid},"lol")
                res.json({token});
            }else{
                res.json(new Error("Authenticaion Failed"))
            }
        });
        app.get(`/auth/${provider}/fail`,(req,res)=>{
            res.json(new Error("Authenticaion Failed"))
        })
    })
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        user.findById(id).then( user=> {
          done(null, user);
        }).catch(done)
    });
    
}