/* eslint prefer-spread:0, prefer-reflect:0, prefer-rest-params:0 */

const CopyPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const find = require('globule').find
const path = require('path')
const webpack = require('webpack')

const protocol = process.platform === 'win32' ? 'file:///' : 'file://'
const hotModules = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client',
]
const config = module.exports = {
  entry: entries(),
  output: {path: resolve('dist'), filename: '[name].js', publicPath: '/'},
  resolve: {extensions: ['', '.js', '.jsx']},
  module: {loaders: [
    {test: /\.jsx?$/, loader: 'babel', include: resolve('src')},
    {test: /\.css$/, loader: 'style!css'},
    {test: /\.(gif|jpg|jpeg|png|svg)$/, loader: 'file'},
  ]},
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()],
}

if(Object.keys(config.entry).length > 1) {
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin('common'))
}

try {
  const from = resolve('assets')
  fs.accessSync(from, fs.F_OK)
  config.plugins.unshift(new CopyPlugin([{from}]))
}
catch(e) {
  // Skip copy from assets
}

switch(process.env.NODE_ENV) {
case 'development':
  config.devtool = 'inline-source-map'
  config.output.devtoolModuleFilenameTemplate = filenameTemplate
  if(process.env.BABEL_ENV !== 'hot') { break }
  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ])
  Object.keys(config.entry).forEach(key => {
    if(typeof config.entry[key] === 'string') {
      config.entry[key] = [config.entry[key]]
    }
    if(!Array.isArray(config.entry[key])) { return }
    config.entry[key] = hotModules.concat(config.entry[key])
  })
  break
case 'production':
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {drop_console: true, drop_debugger: true},
      output: {comments: false},
    }),
    new webpack.optimize.DedupePlugin(),
  ])
  break
default:
}

function entries() {
  return find(resolve('src/*.{js,jsx}')).reduce((obj, filename) => {
    const name = path.basename(filename, path.extname(filename))
    obj[name] = filename
    return obj
  }, {})
}

function resolve() {
  const args = [__dirname].concat(Array.from(arguments))
  return path.join.apply(path, args)
}

function filenameTemplate(h) {
  return `${protocol}${h.absoluteResourcePath.split(path.sep).join('/')}`
}
