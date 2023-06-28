const PORT = process.env.PORT
const path = require("path")
const express = require("express")
const app = express()

// expressのセッティング
app.set("view engine", "ejs")

// 静的コンテンツ
app.use("/public", express.static(path.join(__dirname, "/public")))

// 動的コンテンツ
app.use("/", require("./routes/index.js"))

// サーバーの起動(webアプリの実行)
app.listen(PORT, ()=> {
    console.log(`App listen ${PORT}`)
})


