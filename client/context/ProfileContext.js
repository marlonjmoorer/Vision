import React, { Component } from 'react';
import Cookie from 'js-cookie';
import api from '../api';

const ProfileContext=React.createContext()

export  class Provider extends Component {

  constructor(props){
    super(props) 
  }
  state={
    profile:{},
    fetchProfile:(id)=>{
      api.get(`/users/${id}`)
       .then(({data})=>this.setState({profile:data}))
    },
  }

  render() {
    return (
      <ProfileContext.Provider value={this.state}>
      {this.props.children}
      </ProfileContext.Provider>
    )
  }
}

export const consumer=(Component)=>props=>
<ProfileContext.Consumer>
{(context)=><Component {...props} {...context} />}
</ProfileContext.Consumer>

