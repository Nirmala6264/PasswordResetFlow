import axios from "axios"
const instance = axios.create({
    baseURL:"http://localhost:8060/api"
})
export default instance