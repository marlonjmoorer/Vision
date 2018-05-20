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
export const effects={
 LOGOUT(state){
  state.loggedIn=false
  state.token=null
 },
 LOGIN(state,token){
  Cookie.set('token',token);
  state.loggedIn=true
  state.token=token  
 },
 SET_USER(state,user){
  state.user=user
 }
}
export const actions={
  logout:({commit})=> {
    Cookie.remove("token")
    window.location.href = window.location.href
    commit("LOGOUT")
  },
  fetchUser:async({commit})=>{
    return api.get("/users/self")
    .then(({data})=>{
      commit("SET_USER",data)
    })
  }
}


