import React, { Component } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

const AuthContext=React.createContext()
const http= axios.create({
 withCredentials:true,
 baseURL:"/api"
})

export default class Auth extends Component {

  constructor(props){
    super(props) 
    if (props.token){
        http.defaults.headers={
                  "Authorization":`JWT ${props.token}`,
                  'Content-Type': 'application/json'
        }
    }  
  }
  state={
    loggedIn: !!(this.props.token),
    setToken:(token)=>{
        console.log('Log')
        Cookie.set('token',token);
        this.setState({loggedIn:true,token})
    },
    token:this.props.token,
    logout:()=> {
      Cookie.remove("token")
      this.setState({loggedIn:false,token:null})
    },
    user:null,
    fetchUser:()=>{
      http.get("/users/self").then(user=>this.setState({user}))
    },
    updateUser:()=>{
 
    }
  }

  
  render() {
    console.log(this.props)
    return (
      <AuthContext.Provider value={this.state}>
      {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const withConsumer=(Component)=>props=>
<AuthContext.Consumer>
{(context)=><Component {...props} {...context} />}
</AuthContext.Consumer>