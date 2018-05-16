import React, { Component } from 'react';
import Cookie from 'js-cookie';
import api,{setAuth} from '../api';
import Router from 'next/router'

const AuthContext=React.createContext()


export const state=(props)=>({
    loggedIn: !!(props.token),
    token:props.token,
    user:null,
})

export const actions={
  setToken:async(state,token)=>{
    console.log('Log',token)
    Cookie.set('token',token);
    return({loggedIn:true,token})  
  },
  logout:(state)=> {
    Cookie.remove("token")
    window.location.href = window.location.href
    return ({loggedIn:false,token:null})
  },
  fetchUser:async(state)=>{
    console.log("fetching user")
    return api.get("/users/self").then(({data})=>({user:data}))
  },
  updateUser:()=>{
 
  }
}
// export const consumer=(Component)=>props=>
// <AuthContext.Consumer>
// {(context)=><Component {...props} {...context} />}
// </AuthContext.Consumer>

// export  class Provider extends Component {

//   constructor(props){
//     super(props) 
//     api.interceptors.request.use((config)=> {
//       if(this.state.token)
//       {config.headers.authorization=`JWT ${this.state.token}`}
//       return config;
//     });
//   }

//   state={
//     loggedIn: !!(this.props.token),
//     setToken:async(token)=>{
//         console.log('Log')
//         Cookie.set('token',token);
//         this.setState({loggedIn:true,token})  
//     },
//     token:this.props.token,
//     logout:()=> {
//       Cookie.remove("token")
//       this.setState({loggedIn:false,token:null})
//       window.location.href = window.location.href
//     },
//     user:null,
//     profile:null,
//     fetchUser:async()=>{
//       console.log("fetching user")
//       await api.get("/users/self").then(({data})=>this.setState({user:data}))
//       console.log(this.state.user)
//     },
//     updateUser:()=>{
 
//     }
//   }
//   componentDidMount() {
//     if(this.state.loggedIn && !this.state.user){
//       this.state.fetchUser()
//     }
//   }

  
//   render() {
//     return (
//       <AuthContext.Provider value={this.state}>
//       {this.props.children}
//       </AuthContext.Provider>
//     )
//   }
// }




