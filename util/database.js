const mysql = require('mysql2')

const pool = mysql.createPool({
 host: 'localhost',
 user: 'root',
 database: 'node-complete',
 password: '192511244'
})

module.exports = pool.promise()