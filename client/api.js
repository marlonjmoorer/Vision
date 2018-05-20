import axios from 'axios';
import Cookie from 'js-cookie';
 import store from './store';
const api= axios.create({
    withCredentials:true,
    baseURL:"http://localhost:3500/api"
})

api.interceptors.request.use((config)=> {
    console.log("calling",config.baseURL,config.url)
    const token= Cookie.get("token")
    if(token)
    {
        config.headers.authorization=`JWT ${token}`   
    }
   // config.headers['Content-Type']='application/json'
    return config;
});


export default api