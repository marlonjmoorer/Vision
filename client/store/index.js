import * as Profile from './ProfileContext';
import * as Auth from './AuthContext';
import React, {Component,createContext} from 'react'
import Axios from 'axios';
import Store from '../Context/Store';
import { EventEmitter } from 'events';

import { connect } from '../Context';


const context = {
    "auth": Auth,
    "profile": Profile
}




export default new Store({
    state:{
     ...Auth.state,
     ...Profile.state
    },
    actions:{
       ... Auth.actions,
       ...Profile.actions
    }
})

export const connectPage = Page => {
  const Enhanced=connect(Page)
  Enhanced.getInitialProps=async(ctx)=>{
    if(Page.getInitialProps)
        return await Page.getInitialProps(ctx)
  }
  return Enhanced
}