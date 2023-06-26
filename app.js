const PORT = process.env.PORT
const express = require("express")
const app = express()

// リクエストを受けたとき、どのような処理をするのか
app.get("/", (req, res) => {
    res.end("Hello!!!")
})

// サーバーの起動
app.listen(PORT, ()=> {
    console.log(`App listen ${PORT}`)
})


