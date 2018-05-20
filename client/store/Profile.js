import React, { Component } from 'react';
import Cookie from 'js-cookie';
import api from '../api';

const ProfileContext=React.createContext()

export const state={
 // profile:{},
}
export const effects={
  SET_PROFILE(state,profile){
    state.profile=profile
  }
}
export const actions={
  fetchProfile:(state,id)=>{
    console.log("id is " ,id)
    return api.get(`/users/${id}`)
     .then(({data})=>{
       console.log("pr",data)
       return({profile:data})
      })
  },
  setProfile:(_,profile)=>({profile}),
  updateProfile({commit},profile,id){
      return api.patch(`/users/${id}`,profile,{headers:{
        "Content-Type": "multipart/form-data"
      }}).then(({data})=>{
        commit("SET_PROFILE",data)
      })
  }
}

