const { promisify } = require("util")
const config = require("../../config/mysql.config.js")
const mysql = require("mysql")
const { release } = require("os")
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
    pool,
    getConnection: promisify(pool.getConnection).bind(pool),
    executeQuery: promisify(pool.query).bind(pool),
    releaseConnection: function(connection) {
        release.connection()
    },
    end: promisify(pool.end).bind(pool)
}