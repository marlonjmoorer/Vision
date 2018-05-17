import React, { Component } from 'react';
import Cookie from 'js-cookie';
import api from '../api';

const ProfileContext=React.createContext()

export const state={
  profile:{},
}
export const actions={
  fetchProfile:(state,id)=>{
    console.log("id is " ,id)
    return api.get(`/api/users/${id}`)//.then(console.log)
     .then(({data})=>{
       console.log("pr",dat)
       return({profile:data})
      })
  }
}

