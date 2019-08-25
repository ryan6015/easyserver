const express = require('express');
let app = express();
let api = require('./api/api');

app.use('/', api);

// 启动监听
const server = app.listen(8081, () => {
    const address = server.address();
    console.log('Server start at: http://%s:%s', 'localhost', address.port);
});