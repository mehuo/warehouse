var testApi = require('./test');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
const app = express();

// 服务开启后访问指定编译好的dist文件下的数据
app.use(express.static(path.join(__dirname, '../src')));

// 后端api路由
app.use('/test', testApi);
// 监听端口
app.listen(8888);
console.log('success listen at port:8888......');