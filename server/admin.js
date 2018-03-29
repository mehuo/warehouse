var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({extended:true}))

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

router.post('/addUser', function(req, res) {
    console.log("adduser")
    console.log('------------------------------',req.params);
    console.log('------------------------------',req.query);
    console.log('------------------------------',req.body);

    jsonWrite(res,{name:'aaa',pwd:'123'});
    res.end('is over');
});

module.exports = router;