
const https = require('https');
const fs = require('fs');
const port = process.env.PORT||3500

const httpsOptions = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
}


const app=require('./server/app')
app.listen(port, () => {
    console.log('http://localhost:' + port)
})



 
