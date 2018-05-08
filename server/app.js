const express = require('express')
const next = require('next')
const dotenv = require('dotenv').config()
const session = require('express-session');
const grant = require('grant-express');
const nextConfig = require('../next.config')
const models = require('./models')
const dev = process.env.NODE_ENV !== 'production'

const app = next({
    dev,
    dir:'./client',
    conf:nextConfig
})
const handle = app.getRequestHandler()
const port = process.env.PORT||3000



app.prepare().then(() => {
  const server = express()
  server.use(session({secret: 'grant'}))
  .use(grant(require("./grant.config")))
  

  server.get('*', (req, res) => {
    handle(req, res)
  })
  server.listen(port,()=>console.log("Server listening on port " +port))
})