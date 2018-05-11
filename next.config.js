
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
module.exports = withSass(withCSS({
    distDir: 'build',
    dir:'./client',
    dev:true
}))