module.exports = {
    google: {
      clientID: process.env.googleKey,
      clientSecret: process.env.googleSecret,
      callbackURL: "http://127.0.0.1:3000/auth/google/callback"
    },
    twitter: {
      consumerKey: process.env.twitterKey,
      consumerSecret: process.env.twitterSecret,
      callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    },
    other: {
        consumerKey: 'get_your_own',
        consumerSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    }, 
    facebook: {
        consumerKey: 'get_your_own',
        consumerSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    }
  };