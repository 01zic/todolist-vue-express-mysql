// 导入Mysql包
const mysql = require('mysql');
// 创建数据的连接
const con = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'wzc20010224',
    database: 'test',
    // 设置时区，格式化时间
    timezone: 'SYSTEM'
})

// 进行连接
con.connect();

// 编写操作

function execute(sql) {
    return new Promise((resolve, reject) => {
        con.query(sql, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
}
module.exports = {
    execute
}