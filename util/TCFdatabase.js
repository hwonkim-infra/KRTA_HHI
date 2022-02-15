// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: 'ls-5f1f559b0d49ab35a6339151469365979f7fd620.ckfvonntqvam.ap-northeast-2.rds.amazonaws.com',
    user: 'dbmasteruser',
    database: 'TCF',
    password: 'F{T>Y)I{+|dTu`rr<;B?].ex)k4oYo5g',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();