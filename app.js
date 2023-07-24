const PORT = process.env.PORT
const path = require("path")
const logger = require("./lib/log/logger.js")
const accesslogger = require("./lib/log/accesslogger.js")
const applicationlogger = require("./lib/log/applicationlogger.js")
const express = require("express")
const favicon = require("serve-favicon")
const app = express()

// expressのセッティング
app.set("view engine", "ejs")
app.disable("x-powered-by")

// グローバルなメソッドをviewエンジンに渡す
app.use((req, res, next) => {
    res.locals.moment = require("moment")
    res.locals.padding = require("./lib/math/math.js").padding
    next()
})

// 静的コンテンツ
app.use(favicon(path.join(__dirname, "/public/favicon.ico")))
app.use("/public", express.static(path.join(__dirname, "/public")))

// アクセスログ
app.use(accesslogger())

// 動的コンテンツ
app.use("/", require("./routes/index.js"))
app.use("/test", async(req, res, next)=>{
const { MySQLClient, sql } = require("./lib/database/client.js")
    var data

    try {
       data = await MySQLClient.executeQuery(await sql("SELECT_SHOP_BASIC_BY_ID"), [1])
       console.log(data)
    } catch (e) {
        next(e)
    }

    res.end("OK")
})

// アプリケーションログ
app.use(applicationlogger())

// サーバーの起動(webアプリの実行)
app.listen(PORT, ()=> {
    logger.application.info(`App listen ${PORT}`)
})


