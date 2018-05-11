import React, { Component } from 'react';
import Cookie from 'js-cookie';

const AuthContext=React.createContext()


export default class Auth extends Component {

  constructor(props){
    super(props)   
  }
  state={
    loggedIn: !!(this.props.token),
    setToken:(token)=>{
        console.log('Log')
        Cookie.set('token',token);
        this.setState({loggedIn:true,token})
    },
    token:this.props.token,
    logout:()=> {
      Cookie.remove("token")
      this.setState({loggedIn:false,token:null})
    }
  }

  
  render() {
    console.log(this.props)
    return (
      <AuthContext.Provider value={this.state}>
      {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const withConsumer=(Component)=>props=>
<AuthContext.Consumer>
{(context)=><Component {...props} {...context} />}
</AuthContext.Consumer>