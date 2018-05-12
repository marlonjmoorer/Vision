
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
module.exports = withSass(withCSS({
    distDir: 'build',
    dir:'./client',
    webpack(config, { dev }) {
        if (dev) {
          config.devtool = 'cheap-module-inline-source-map';
        }
      return config;
    }
}))