// sql语句
var limit = 10;
var sqlMap = {
    // 用户
    user: {
        login: 'SELECT password FROM t_user WHERE name = ?;',
        add: 'INSERT INTO t_user(name, password , role , create_time , update_time , is_delete) values (?, ? ,? ,?,?,?);',
    	total : 'SELECT COUNT(*) total FROM t_user WHERE NAME LIKE ?',
    	list : 'SELECT * FROM t_user WHERE name like ? limit ?,?'
    }
}

module.exports = sqlMap;
module.exports.limit = limit;