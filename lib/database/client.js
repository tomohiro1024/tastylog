
const path = require("path")
const { sql } = require("@garafu/mysql-fileloader")({ root: path.join(__dirname, "./sql")})


module.exports = {
    MySQLClient,
    sql
}