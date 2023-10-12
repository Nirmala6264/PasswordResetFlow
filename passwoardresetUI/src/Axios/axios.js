import axios from "axios"
const instance = axios.create({
    baseURL:"https://passwordresetflow-tlxb.onrender.com/api"
})
export default instance