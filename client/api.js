import axios from 'axios';
import Cookie from 'js-cookie';
const api= axios.create({
 //   withCredentials:true,
   // baseURL:"localhost:3500/api"
})
 
api.interceptors.request.use((config)=> {
    console.log("calling",config.baseURL,config.url)
    const token= Cookie.get("token")
    if(token)
    {
        config.headers.authorization=`JWT ${token}`
    }
    return config;
});

export default api