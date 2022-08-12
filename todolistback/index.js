// npm i -S -g nodemon 监听项目文件的变化，自动重启项目
// npm i -S bcryptjs 加密包
// 表单验证的包
// 引入express模块
const express = require('express');

// cors方法 解决跨域问题 cnpm i -S cors
// const cors = require('cors');
// 创建express实例
const app = express();

// app使用cors
// app.use(cors());
// 抽离路由为单独的模块
// 引入封装的router方法
const cors = require('cors');
const { todolistRouter } = require('./router');

app.use(cors());
app.use('/todolist/api', todolistRouter);
// 开启监听
app.listen(3333, () => {
    console.log('服务监听开启在 http://localhost:3333')
})