import axios from 'axios';

const api= axios.create({
    withCredentials:true,
    baseURL:"/api"
})
 
export const setAuth=(token)=>{
    api.defaults.headers={
        "Authorization":`JWT ${token}`,
        'Content-Type': 'application/json'
    }
}
export default api