import requests from "./request";
// 获取所有的数据
export const reqAllItem = () => {
    return requests({
        method: 'get',
        url: '/all'
    })
}

// 根据id 获取数据
export const reqItemById = (id) => {
    return requests({
        method: 'get',
        url: `/${id}`,
    })
}

// 添加数据
export const reqAddItem = (localContent) => {
    return requests({
        method: 'post',
        url: '/add',
        data: {
            content: localContent
        }
    })
}

// 根据id 修改数据
export const reqUpdateItem = (id, localContent, done) => {
    return requests({
        method: 'put',
        url: `/update/${id}`,
        data: {
            content: localContent,
            done: done
        }
    })
}

// 根据id 删除数据
export const reqDeleteItem = (id) => {
    return requests({
        method: 'delete',
        url: `/delete`,
        params: {
            id: id
        }
    })
}
