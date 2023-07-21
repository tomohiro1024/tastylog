const { promisify } = require("util")
const config = require("../../config/mysql.config.js")
const mysql = require("mysql")
// sql接続
const pool = mysql.createPool({
    host: config.HOST,
    port: config.PORT,
    user: config.USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE,
    connectionLimit: config.CONNECTION_LIMIT,
    queueLimit: config.QUEUE_LIMIT
})

module.exports = {
    connect: promisify(con.connect).bind(con),
    query: promisify(con.query).bind(con),
    end: promisify(con.end).bind(con)
}