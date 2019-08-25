const express = require('express');
const router = express.Router();
// 解析post请求中的body参数
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const query = require('../src/dao/query');

// 测试连接
router.get('/', (req, res) => {
    console.log('request /test success.');
    res.end('request success');
});

// 查询用户代办
router.get('/query/:userid', (req, res) => {
    console.log('request /query success; param: %s', req.params.userid);
    res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
    query.queryAllByUserid(req.params.userid).then(function (result) {
        res.end(JSON.stringify(result));
    }).catch(() => {
        res.end('error');
    });
});

// 所有其他不存在的路由，必须写在所有路由之后
router.use((req, res) => {
    res.end('404');
});

module.exports = router;