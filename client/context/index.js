
import *  as  Profile from './ProfileContext';
import * as Auth from './AuthContext';
import React from 'react'

const context={
    "auth":Auth,
    "profile":Profile
}
const combineProviders=()=>{
    return Object.values(context)
    .map(({Provider})=>Provider)
    .reduce((Tree,Component)=>(props)=>
     <Component>
        <Tree {...props}/>
    </Component>)
}
const initProps=(ctx)=> {
    return Child.getInitialProps(ctx)
}
export const inject=(keys=[])=>Root=>{
  return Object.entries(context)
    .filter(([key])=>keys.includes(key))
    .map(([key,{consumer}])=>consumer)
    .reduce((Component,Wrapper)=>{ 
        const Enhanced= Wrapper(Component)
        Enhanced.getInitialProps= async(ctx)=> {
            if(Component.getInitialProps)
                return await Component.getInitialProps(ctx);
        }
        return Enhanced
    },Root)
}

export default combineProviders()

