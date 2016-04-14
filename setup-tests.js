require('babel-register')
const jsdom = require('jsdom').jsdom

const document = global.document = jsdom('')
const window = global.window = document.defaultView
global.navigator = window.navigator
