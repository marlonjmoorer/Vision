
import React, { Component } from 'react'
import Router from '../../router';
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Button,
  Alignment,
  Popover,
  Position,
  Dialog,Intent,Menu,MenuItem,Icon,AnchorButton
}from '@blueprintjs/core';
import SignupForm from './SignupForm';
import { connect } from '../Context';



 class NavbarComponent extends Component {
  state={
    isOpen:false
  }
  constructor(props){
    super(props)
    if(props.loggedIn && !props.user){
      this.props.fetchUser()
    }
  }
  toggleOverlay=()=>{
    this.setState(({isOpen})=>({isOpen:!isOpen}))
  }


  render() {
    const {loggedIn,user}=this.props
    return (
      <div>
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading  > <AnchorButton href="/" text="Vision" minimal rightIcon="eye-open"/> </NavbarHeading>
            </NavbarGroup>
           {loggedIn?<LoggedInActions/>:<Actions isOpen={this.state.isOpen} toggle={this.toggleOverlay}/>}
        </Navbar>
      </div>
    )
  }
}
const LoggedInActions = ({loggedIn})=>
  <NavbarGroup align={Alignment.RIGHT}>                
  <Popover content={<UserMenu/>} position={Position.BOTTOM}>
    <Button icon="user" />
  </Popover>
  </NavbarGroup>

const Actions =({isOpen,toggle})=>
    <NavbarGroup align={Alignment.RIGHT}>
        <Button className="pt-minimal" icon="home" text="Home" />
        <Button text="Signin" onClick={toggle} />
        <Dialog
            icon="inbox"
            isOpen={isOpen}
            onClose={toggle}
            title="Signin">
            <div className="pt-dialog-body">
              <SignupForm/>
            </div>
        </Dialog>
  </NavbarGroup>

const UserMenu=connect(({logout,user})=>
<Menu>
    <MenuItem icon="dashboard" onClick={e=>Router.pushRoute("profile",{id:user.id})}  text="Dashboard"/>
    <MenuItem icon="log-out"  onClick={logout}  text="Logout" />
    <MenuItem text="Settings..." icon="cog" />
</Menu>)
export default connect(NavbarComponent)
