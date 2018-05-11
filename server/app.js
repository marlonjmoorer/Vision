const express = require('express')
const next = require('next')
const dotenv = require('dotenv').config()
const session = require('express-session');
const grant = require('grant-express');
const path = require('path');
const nextConfig = require('../next.config')



const dev = process.env.NODE_ENV !== 'production'
const fs=require("fs")
const app = next({
    dev,
    dir:'./client',
    conf:nextConfig
})
const handle = app.getRequestHandler()



const server = express()
server.set('view engine', 'pug')
server.set('views', path.join(__dirname, 'views'));
server.use(session({secret: 'grant'}))
require('./auth')(server)
// server.get('*', (req, res) =>{
//   handle(req, res)
// })
module.exports= server
// module.exports=()=>{
//    return app.prepare().then(() => {
//       const server = express()
//       server.use(session({secret: 'grant'}))
//       require('./auth')(server)
//       // .use(grant(require("./grant.config")))
//       // .get("/:provider/callback",(req,res)=>{
//       //   console.log(req.query)
//       //   fs.writeFile("./out.txt",JSON.stringify(req.query,null,4))
//       //   res.end()
//       // })

//       server.get('*', (req, res) => {
//         handle(req, res)
//       })
//       return server
//     })
// }