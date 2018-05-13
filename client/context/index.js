
import Profile from './ProfileContext';
import Auth from './AuthContext';
import React from 'react'

const conext=[Auth,Profile]
const consumers=[]
const combineProviders=()=>{
    return conext.reduce((Tree,Component)=>(props)=>
     <Component>
        <Tree {...props}/>
    </Component>)
}

export default combineProviders()

