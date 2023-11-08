// モジュールの読み込み
const messageModule = require('./message')
const controlModule = require('./control')

var items = itemModule.items
controlModule.show(items)
