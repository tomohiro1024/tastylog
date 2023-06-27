const PORT = process.env.PORT
const express = require("express")
const app = express()

// リクエストを受けたとき、どのような処理をするのか
app.set("view engine", "ejs")

app.use("/", require("./routes/index.js"))

// サーバーの起動
app.listen(PORT, ()=> {
    console.log(`App listen ${PORT}`)
})


