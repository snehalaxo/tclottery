const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '165.140.240.16',
    user: 'ksgbiz',
    password: 'ye8eNabijjRbmiFZ',
    database: 'ksgbiz'
});


export default connection;