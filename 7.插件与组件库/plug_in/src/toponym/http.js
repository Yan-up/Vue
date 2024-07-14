import http from './httpRequest.js'

const getApi = (api, params) => {//get请求
    return http.get(api, {
        params
    })
}

const postApi = (api, params) => {//post请求
    return http.post(api, params)
}

export {
    getApi,
    postApi
}