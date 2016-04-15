const Server = require('hapi').Server
const webpack = require('webpack')
const config = require('./webpack.config')

const port = parseInt(process.env.PORT, 10) || 3000
const server = new Server()
const webpackPlugin = {
  register: require('hapi-webpack-plugin'),
  options: {
    compiler: webpack(config),
    assets: {noInfo: true, publicPath: config.output.publicPath},
  },
}

server.connection({port})
server.register(webpackPlugin, error => { if(error) { throw error } })
server.start(() => console.log(`Server running at: ${server.info.uri}`))
