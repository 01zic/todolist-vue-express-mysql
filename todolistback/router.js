// 引入express
const express = require('express');
// 使用路由
const todolistRouter = express.Router();
// 引入封装的mysql方法
const { execute } = require('./mysql');
// 引入body-parser
const bodyparser = require('body-parser');
// 使用body-parser
todolistRouter.use(bodyparser.urlencoded(
    {
        extended: false
    }))
// 获取格式化时间后的数据方法
// const dataFormat = require('./dataFormat');
todolistRouter.get('/all', async function (req, res) {
    let sql = 'select * from todolist where delete_time is null';
    let data = null;
    try {
        data = await execute(sql);
    } catch (err) {
        res.send({
            code: 0,
            message: '查询所有数据失败',
            result: err
        })
    }
    // dataFormat(data);
    if (data) {
        res.send({
            code: 1,
            message: '获取所有的数据',
            resultLength: data.length,
            result: data
        });
    } else {
        res.send({
            code: 0,
            message: '没有数据',
            result: ''
        })
    }
})

// 根据id获取数据
todolistRouter.get('/:id', async function (req, res) {
    let id = req.params.id;
    const reg = /^\d+$/;
    if (!reg.test(id)) {
        res.send({
            code: 0,
            message: "id必须为数字",
            result: ''
        })
        return;
    }
    let sql = `select * from todolist where id=${id}`;
    let data = null;
    try {
        data = await execute(sql);
    } catch (err) {
        res.send({
            code: 0,
            message: '查询单个数据失败',
            result: err
        })
    }
    // dataFormat(data);
    if (data) {
        res.send({
            code: 2,
            id: id,
            message: `获取id为${id}的数据`,
            result: data,
        });
    } else {
        res.send({
            code: 0,
            menubar: `${id}对应的数据不存在`,
            result: '',
        })
    }
})

// 添加
todolistRouter.post('/add', async (req, res) => {
    // 解析请求体
    const content = req.body.content;
    if (!content) {
        res.send({
            code: 0,
            message: '数据为空',
            result: ''
        })
        return;
    }
    let sql = `insert into todolist (content) values ('${content}')`;
    // let id = null;
    let insertId;
    try {
        insertId = (await execute(sql)).insertId;
    } catch {
        res.send({
            code: 0,
            message: '添加数据到数据库失败',
            result: err
        })
        return;
    }
    // 返回所有数据
    sql = `select * from todolist where delete_time is null`;
    try {
        const data = await execute(sql);
        res.send({
            code: 3,
            message: '成功添加待办事项，并返回所有的数据',
            resultLength: data.length,
            result: data
        })
    } catch (err) {
        res.send({
            code: 0,
            message: '添加待办事项失败',
            result: err
        })
    }

})

// 更新待办
todolistRouter.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const { content, done } = req.body;
    if (!content && !done) {
        res.send({
            code: 0,
            message: 'content为空',
            result: ''
        })
        return;
    }
    let sql = `update todolist set content='${content}',done=${done} where id=${id}`;
    try {
        await execute(sql);
    } catch (err) {
        res.send({
            code: 0,
            message: '更新失败',
            result: err
        })
    }
    // 返回所有数据
    sql = `select * from todolist where delete_time is null`;
    try {
        const data = await execute(sql);
        res.send({
            code: 4,
            message: '成功更新待办事项，并返回所有的数据',
            resultLength: data.length,
            result: data
        })
    } catch (err) {
        res.send({
            code: 0,
            message: '更新待办事项失败',
            result: err
        })
    }

})
// 删除待办

todolistRouter.delete('/delete', async (req, res) => {
    const id = req.query.id;
    let sql = `update todolist set delete_time = NOW() where id=${id}`;
    try {
        await execute(sql);
        // 返回所有的数据
        sql = `select * from todolist where delete_time is null`;
        const data = await execute(sql);
        res.send({
            code: 5,
            message: '删除成功',
            resultLength: data.length,
            result: data
        })
    } catch (err) {
        res.send({
            code: 0,
            message: '删除失败',
            result: err
        })
    }
})
module.exports = {
    todolistRouter
}