import * as Profile from './ProfileContext';
import * as Auth from './AuthContext';
import React, {Component,createContext} from 'react'
import Axios from 'axios';
import Store from '../Context/Store';
import { EventEmitter } from 'events';
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
