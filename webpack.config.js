const CopyPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const globule = require('globule')
const path = require('path')
const webpack = require('webpack')

// When rewriting source map file paths, prepend a slash for Windows
const protocol = process.platform === 'win32' ? 'file:///' : 'file://'

// Modules requires for hot reloading in development
const hotModules = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client',
]

// Build base Webpack configuration
const config = module.exports = {
  entry: entries(),
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        loader: 'file',
      },
    ],
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()],
}

// If there are more than one generated JS files, create a file that contains
// shared code among all generated JS files called common.js
if(Object.keys(config.entry).length > 1) {
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin('common'))
}

// If there is an assets folder, tell Webpack to copy contents as part of build
try {
  const from = resolve('assets')
  fs.accessSync(from, fs.F_OK)
  config.plugins.unshift(new CopyPlugin([{from}]))
}
catch(e) {
  // Skip copy from assets
}

// Add additional Webpack configurations based on environment
//  development - source maps, possible hot loading
//  production - minification and optimization
switch(process.env.NODE_ENV) {
case 'development':
  config.devtool = 'inline-source-map'
  config.output.devtoolModuleFilenameTemplate = filenameTemplate
  if(process.env.HOT_MODULES !== 'true') { break }
  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ])
  Object.keys(config.entry).forEach(key => {
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
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
  ])
  break
default:
}

// Find all top-level JS files in src to compile to build an entries object
// for Webpack
function entries() {
  return globule.find(resolve('src/*.js')).reduce((obj, filename) => {
    const name = path.basename(filename, path.extname(filename))
    obj[name] = [filename]
    return obj
  }, {})
}

// Build a path relative to this current one
function resolve(...args) {
  return path.join(__dirname, ...args)
}

// Build a new resource path for source maps with respect to the OS
function filenameTemplate({absoluteResourcePath}) {
  return `${protocol}${absoluteResourcePath.split(path.sep).join('/')}`
}
