
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    distDir: 'build',
    dir:'./client',
    dev:true
})