const log4js = require("log4js")
const config = require("../../config/log.4js.config.js")
var console, application

log4js.configure(config)

// コンソールログ
console = log4js.getLogger()

// アプリケーションログ
application = log4js.getLogger("application")

// 外で使いやすくする
module.exports = {
    console,
    application
}