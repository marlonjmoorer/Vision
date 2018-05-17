import React, { Component } from 'react';
import Cookie from 'js-cookie';
import api,{setAuth} from '../api';
import Router from 'next/router'

const AuthContext=React.createContext()


export const state={
    loggedIn: !!(Cookie.get("token")),
    token:Cookie.get("token"),
    user:null,
}

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
    return api.get("/api/users/self").then(({data})=>({user:data}))
  },
  updateUser:()=>{
 
  }
}


