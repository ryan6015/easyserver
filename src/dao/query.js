const mysql = require('mysql');
// 导入mysql配置项
const mysqlConfig = require('../../config/mysql.config');
// 创建连接池
const pool = mysql.createPool(mysqlConfig);

/**
 * 查询用户所有代办
 * @param {String} userid 用户id
 */
function queryAllByUserid(userid) {
    const sql = "SELECT * FROM T_TODO WHERE USERID = ?";
    console.log('execute sql: %s', sql);
    return new Promise((resolve, reject) => {
        pool.query(sql, [userid], function (err, result) {
            if (err) {
                reject();
            };
            console.log('sql result: %s', JSON.stringify(result));
            resolve(result);
        });
    });
}

module.exports = {
    queryAllByUserid: queryAllByUserid
};