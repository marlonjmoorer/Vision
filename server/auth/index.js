const passport = require('passport')
const jwt = require('jsonwebtoken');
const {User} = require('../models');
const secret=process.env.SECRET
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
            const token=generateToken(req.user)
            res.render('auth',{token})
        });
        app.get(`/auth/${provider}/fail`,(req,res)=>{
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
    
}


const generateToken=({loginType,id,profileId})=>{

    const token = jwt.sign({profileId}, secret, {
        expiresIn: '3 days',
        issuer: loginType,
        subject: id.toString()
      });
    
      return token;
}