module.exports = {
    google: {
      clientID: process.env.googleKey,
      clientSecret: process.env.googleSecret,
      callbackURL: "http://localhost:3500/auth/google/callback"
    },
    twitter: {
      consumerKey: process.env.twitterKey,
      consumerSecret: process.env.twitterSecret,
      callbackURL: "http://localhost:3500/auth/twitter/callback"
    },
    other: {
        consumerKey: 'get_your_own',
        consumerSecret: 'get_your_own',
        callbackURL: "http://localhost:3500/auth/twitter/callback"
    }, 
    facebook: {
      clientID: process.env.facebookKey,
      clientSecret: process.env.facebookSecret,
      callbackURL: "http://localhost:3500/auth/facebook/callback"
    }
  };