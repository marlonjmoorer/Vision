import * as Profile from './Profile';
import * as Auth from './Auth';
import React, {Component,createContext} from 'react'
import { EventEmitter } from 'events';
import { connect,Store } from 'phaze';

export default new Store({
    state:{
     ...Auth.state,
     ...Profile.state
    },
    actions:{
       ... Auth.actions,
       ...Profile.actions
    },
    effects:{
        ...Auth.effects,
        ...Profile.effects
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