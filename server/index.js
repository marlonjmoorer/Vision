const express = require('express')
const session = require('express-session');
const path = require('path');
const server = express()

server.set('view engine', 'pug')
server.set('views', path.join(__dirname, 'views'));
server.use(session({secret: 'secret'}))

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Authorization,X-Requested-With, Content-Type, Accept");
    next();
});
server.use("/auth",require('./auth'))
server.use("/api",require("./routes"))


module.exports= server
    
