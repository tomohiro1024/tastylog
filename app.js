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
       await MySQLClient.connect()
       data = await MySQLClient.query(await sql("SELECT_SHOP_BASIC_BY_ID"), [1])
       console.log(data)
    } catch (e) {
        next(e)
    } finally {
        // 接続を切断
        await MySQLClient.end
    }

    res.end("OK")
})

// アプリケーションログ
app.use(applicationlogger())

// サーバーの起動(webアプリの実行)
app.listen(PORT, ()=> {
    logger.application.info(`App listen ${PORT}`)
})


