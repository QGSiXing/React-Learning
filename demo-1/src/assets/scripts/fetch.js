import { HOST } from './serve'
import axios from 'axios'

const fetch = (type, url, params) => {
    switch (type) {
        case 'GET':
            const resp  = await axios.get(`${HOST}${url}`, params)
            const respData = resp.data
            if (respData.code === 200) {// 如果服务端告知成功
                return respData.data
            } else {
                throw respData.message
            }
        case 'POST':
            const resp  = await axios.post(`${HOST}${url}`, params)
            const respData = resp.data
            if (respData.code === 200) {// 如果服务端告知成功
                return respData.data
            } else {
                throw respData.message
            }
        case 'UPLOAD':
            const resp  = await axios.post(`${HOST}${url}`, params)
            const respData = resp.data
            if (respData.code === 200) {// 如果服务端告知成功
                return respData.data
            } else {
                throw respData.message
            }
        default:
            return null
    }
}

export default fetch