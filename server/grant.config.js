module.exports = {
    server: {
        protocol: "http",
        host: process.env.hostname||"localhost:3000",
        state: true
    },
    "facebook": {
        "key": process.env.facebookKey,
        "secret": process.env.facebookSecret,
        "callback": "/callback/",
        "scope": [
          "public_profile",
          "email"
        ]
      },
    google: {
        key: process.env.googleKey,
        secret: process.env.googleSecret,
        callback: "/google/callback",
        scope: [
            "https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/drive"
        ],
        custom_params: {
            access_type: "offline",
            prompt: 'consent'
        }
    },
   "twitter": {
    "key": process.env.twitterKey,
    "secret": process.env.twitterSecret,
    "callback": "/callback"
   }

}