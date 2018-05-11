
import React, { Component } from 'react'
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Button,
  Alignment,
  Popover,
  Position,
  Dialog,Intent,Menu,MenuItem,Icon
}from '@blueprintjs/core';
import SignupForm from './SignupForm';
import {withConsumer} from '../context/AuthContext';



 class NavbarComponent extends Component {
  state={
    isOpen:false
  }
  toggleOverlay=()=>{
    this.setState(({isOpen})=>({isOpen:!isOpen}))
  }


  render() {
    console.log(this.props)
    const {loggedIn,logout}=this.props
    return (
      <div>
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading  > <Button text="Vision" minimal rightIcon="eye-open"/> </NavbarHeading>
            </NavbarGroup>
           {loggedIn?
            <NavbarGroup align={Alignment.RIGHT}>                
                <Popover content={<UserMenu logout={logout}/>} position={Position.BOTTOM}>
                  <Button icon="user" />
                </Popover>
            </NavbarGroup>
           
           :
           
            <NavbarGroup align={Alignment.RIGHT}>
                <Button className="pt-minimal" icon="home" text="Home" />
                <Button text="Signin" onClick={this.toggleOverlay} />
                <Dialog
                    icon="inbox"
                    isOpen={this.state.isOpen}
                    onClose={this.toggleOverlay}
                    title="Signin">
                    <div className="pt-dialog-body">
                      <SignupForm/>
                    </div>
                </Dialog>
            </NavbarGroup>
            }
        </Navbar>
      </div>
    )
  }
}
const UserMenu=({logout})=>
<Menu>
    <MenuItem icon="dashboard"  href="/dashboard"  text="Dashboard" />
    <MenuItem icon="log-out"  onClick={logout}  text="Logout" />
    <MenuItem text="Settings..." icon="cog" />
    
</Menu>
export default withConsumer(NavbarComponent)
