
const withSass = require('@zeit/next-sass')
module.exports = withSass({
    distDir: 'build',
    dir:'./client',
    dev:true
})