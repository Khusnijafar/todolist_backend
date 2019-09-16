require('dotenv').config()
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "7iA2d638dk",
    password: "FoEWl26ht6",
    database: "7iA2d638dk"
})

connection.connect((err) => {
    if (err) console.log(`Error; ${err}`)
})

module.exports = connection