
const https = require('https');
const fs = require('fs');
const port = process.env.PORT||3500

const httpsOptions = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
}

require('./server/app')().then(app=>{
    https.createServer(httpsOptions,app).listen(port, () => {
        console.log('====================================');
        console.log('https://localhost:' + port)
        console.log('====================================');
    })
})


 
