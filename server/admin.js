var models = require('./db');
var $sql = require('./sqlfun');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var router = express.Router();
router.use(bodyParser.urlencoded({extended:true}))


var connection = mysql.createConnection(models.mysql);
connection.connect();


var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined' || ret.status == 1) {
        res.json({
            status: '1',
            statusinfo: ret.statusinfo || '操作失败'
        });
    } else {
        res.json(ret);
    }
};

var user_sql = $sql.user;


//添加新用户
router.post('/addUser', function(req, res) {
    console.log('------------------------------adduser');
    var params = req.body;
    params.role = 1;
    params.create_time = new Date();
    params.update_time = params.create_time;
    params.is_delete = 0;
    connection.query(user_sql.add , [
            params.uname,
            params.password,
            params.role,
            params.create_time,
            params.update_time,
            params.is_delete
        ],function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            jsonWrite(res,{status:1,statusinfo:err.message});
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n'); 
        jsonWrite(res,{status:0,statusinfo:result.message,data:result});
        res.end();
    });
    
});

//登录操作
router.post('/login',function(req,res){
    console.log('-------------------------------login');
    var params =  req.body;
    connection.query(user_sql.login,[params.uname],function(err,result){
        if(err){
            console.log('[select ERROR] - ',err.message);
            jsonWrite(res,{status:1,statusinfo:err.message});
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        if(result.length  == 0){
            jsonWrite(res,{status:1,statusinfo:'用户名不存在'});
            return;
        }
        for(i = 0 ; i < result.length ; i++){
            if(result[i].password == params.password){
                jsonWrite(res,{status:0,statusinfo:'登录成功',data:params});
            }else{
                jsonWrite(res,{status:1,statusinfo:'密码不正确'});
                return ;
            }
        }
        
        console.log('------------------------------------------------------------\n\n'); 

    })

})


module.exports = router;