
const https = require('https');
const fs = require('fs');
const port = process.env.PORT||3000

const httpsOptions = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
   // requestCert: false,
   // rejectUnauthorized: false
}

require('./server/app')().then(app=>{

    app.listen(port, () => {
       console.log('server running at ' + port)
    })
    // https.createServer(httpsOptions, app).listen(port, () => {
    //     console.log('server running at ' + port)
    // })
})

 
