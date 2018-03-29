var express = require('express');
var router = express.Router();

var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

router.post('/getJson', function(req, res, next) {
	console.log('请求到了');

    jsonWrite(res,{name:'aaa',pwd:'123'});
    res.end('is over');
});

module.exports = router;