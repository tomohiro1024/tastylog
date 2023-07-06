const log4js = require("log4js")
const config = require("../../config/log.4js.config.js")
var console

log4js.configure(config)

console = log4js.getLogger()

// 外で使いやすくする
module.exports = {
    console
}