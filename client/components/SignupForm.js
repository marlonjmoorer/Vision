import React, { Component } from 'react'
import {Button,Card,Elevation,Icon} from "@blueprintjs/core"
import { withConsumer } from '../context/AuthContext';


class SignupForm extends Component {

    constructor(props){
        super(props)
       this.state={url:null}
       
    }
    componentDidMount(){
        
        window.addEventListener('message', this.handleMessage, false);
    }
    handleMessage=({origin,data}) =>{
        if(data.token)
        {
            this.props.setToken(data.token)
            window.removeEventListener("message",this.handleMessage)
        }
    }

    authenticate=(provider)=> {
        window.open('http://127.0.0.1:3500/auth/' + provider);
    }

    render() {
        return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            flexGrow:0
            }}>
         
            <Button intent="danger" value="google"  onClick={e=>this.authenticate("google")} >Sign in with Google</Button>
            <Button intent="primary" value="twitter" onClick={e=>this.authenticate("twitter")} >Sign in with  Twitter</Button>
        </div>
        )
    }
}
export default withConsumer(SignupForm)