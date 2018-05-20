import React, { Component } from 'react'
import {Button,Card,Elevation,Icon} from "@blueprintjs/core"
import { Column, Row } from 'simple-flexbox';
import {connect } from "phaze"
class SignupForm extends Component {

    constructor(props){
        super(props)       
    }
    componentDidMount(){
        
        window.addEventListener('message', this.handleMessage, false);
    }
    handleMessage=({origin,data}) =>{
        if(data.token)
        {
            this.props["LOGIN"](data.token)
            .then(()=>this.props.fetchUser())
            window.removeEventListener("message",this.handleMessage)
        }
    }

    authenticate=(provider)=> {
        window.open(`/auth/${provider}`);
    }

    render() {
        return (
        <Row horizontal="center">
            <Column vertical="space-between">
            
                <Button intent="danger"   onClick={e=>this.authenticate("google")} >Sign in with Google</Button>
                <Button intent="primary"  onClick={e=>this.authenticate("facebook")} >Sign in with  Facebook</Button>
                <Button intent="primary"  onClick={e=>this.authenticate("twitter")} >Sign in with  Twitter</Button>
            </Column>
        </Row>
        )
    }
}
export default connect(SignupForm)