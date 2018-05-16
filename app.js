
const https = require('https');
const fs = require('fs');
const next = require('next')
const server = require('express')();
const nextConfig = require('./next.config')
const router = require('./router');
const port = process.env.PORT||3500
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev, dir: './client', conf: nextConfig})
const handler =router.getRequestHandler(app)
const dotenv = require('dotenv').config()

const httpsOptions = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
}

if (dev) require("./watcher")()



app.prepare().then(()=>{
   
    server.use(function (req, res, next) {
        require('./server')(req, res, next)
    }).use(handler)
    https.createServer(httpsOptions,server).listen(port, () => {
        console.log('====================================');
        console.log('https://localhost:' + port)
        console.log('====================================');
    })
}).catch(console.log)


 
