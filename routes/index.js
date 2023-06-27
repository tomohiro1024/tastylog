const router = require("express").Router()

// ルートのパスがリクエストされた時に実行される
router.get("/", (req, res) => {
    res.render("./index.ejs")
})

module.exports = router