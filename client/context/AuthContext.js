import React, { Component } from 'react';
const AuthContext=React.createContext()


export default class Auth extends Component {


  state={
    loggedIn:false,
    login:()=>{
        console.log('Log')
    }

  }

    
  render() {
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