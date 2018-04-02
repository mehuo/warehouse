// sql语句
var sqlMap = {
    // 用户
    user: {
        login: 'SELECT password FROM t_user WHERE name = ?;',
        add: 'INSERT INTO t_user(name, password , role , create_time , update_time , is_delete) values (?, ? ,? ,?,?,?);'
    }
}

module.exports = sqlMap;