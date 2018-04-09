var models = require('../db');
var $sql = require('../sqlfun');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var router = express.Router();
router.use(bodyParser.urlencoded({extended:true}))

var connection = mysql.createConnection(models.mysql);
connection.connect();
var user_sql = $sql.user;


var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined' || ret.status == 1) {
        res.json({
            status: '1',
            statusinfo: ret.statusinfo || '操作失败',
            data: ret.data || {}
        });
    } else {
        res.json(ret);
    }
};

var fail = function(err){
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        jsonWrite(res,{status:1,statusinfo:err.message});
        return;
    }
}

var pageNation = function(total,page,page_size,data){
    //total 总页数
    //page 当前页数
    //page_size 每页显示条数
    //data 数据
    console.log(total,page,page_size,data);
    var page_data = {};
    page_data.total = total || 0;
    page_data.page = page || 1;
    page_data.page_size = page_size || parseInt($sql.limit);
    page_data.last_page = Math.ceil(total/page_size);
    if(data){
        page_data.data = data;
    }else{
        page_data.data = [];
    }
    console.log(page_data)
    return page_data;
}

var setPageNation = function(data ,key , value){
    console.log(key,value)
    data[key] = value;
    data['last_page'] = Math.ceil(data['total']/data['page_size']);    
    return data;
}



//添加新用户
router.post('/list', function(req, res) {
    console.log('------------------------------list');
    var page_size = parseInt($sql.limit);
    var params = req.body;
    if(params.page_size){
        page_size = parseInt(params.page_size);
    }
    var start = (parseInt(params.page)-1) * parseInt(page_size);
    var page_data = pageNation(0,parseInt(params.page),page_size,[]);
    connection.query(user_sql.total , ['%'+params.keyword+'%',],function (err, result) {
        fail(err);
        page_data = setPageNation(page_data ,'total' ,result[0].total);
        connection.query(user_sql.list , ['%'+params.keyword+'%',start,page_size],function (err, result) {
            fail(err);
            page_data = setPageNation(page_data ,'data' , result);
            jsonWrite(res,{
                status:0,
                statusinfo:'',
                data:page_data
            });
            res.end();
        });
    });  
});

module.exports = router;