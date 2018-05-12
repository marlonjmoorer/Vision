const express = require('express')
const next = require('next')
const dotenv = require('dotenv').config()
const session = require('express-session');
const path = require('path');
const nextConfig = require('../next.config')

const dev = process.env.NODE_ENV !== 'production'
const fs = require("fs")
const app = next({dev, dir: './client', conf: nextConfig})
const handle = app.getRequestHandler()

module.exports = () => {
    return app.prepare()
        .then(() => {
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
            server.get('*', (req, res) => {
                handle(req, res)
            })
            return server
        })
}
