import React from 'react'
import SignupForm from './SignupForm';
import {withConsumer} from '../context/AuthContext';
import {Layout, Menu, Breadcrumb} from 'antd';
const {Header, Content, Footer} = Layout;
export default withConsumer((props) => {
  console.log(props)
  return (
      <Header style={{ position: 'fixed', width: '100%' }}>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{lineHeight: '64px'}}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
  )
})
