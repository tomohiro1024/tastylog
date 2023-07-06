const PORT = process.env.PORT
const path = require("path")
const logger = require("./lib/log/logger.js")
const express = require("express")
const favicon = require("serve-favicon")
const app = express()

// expressのセッティング
app.set("view engine", "ejs")
app.disable("x-powered-by")

// 静的コンテンツ
app.use(favicon(path.join(__dirname, "/public/favicon.ico")))
app.use("/public", express.static(path.join(__dirname, "/public")))

// 動的コンテンツ
app.use("/", require("./routes/index.js"))

// サーバーの起動(webアプリの実行)
app.listen(PORT, ()=> {
    logger.console.info(`App listen ${PORT}`)
})


