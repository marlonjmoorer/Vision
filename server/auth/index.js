const passport = require('passport')

module.exports=(app)=>{
    app.use(passport.initialize());
    app.use(passport.session());
    const providers=["google"]

    providers.forEach(provider=>{
        const strategy=require(`./${provider}`)
        passport.use(strategy)
        app.get(`/auth/${provider}`, passport.authenticate(provider,{ scope: ['profile'] }));
        app.get(`/auth/${provider}/callback`,
        passport.authenticate(provider, { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication
            res.json(req.user);
        });
    })
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
       // User.findById(id, function (err, user) {
          done(err, {});
       // });
    });
    
}