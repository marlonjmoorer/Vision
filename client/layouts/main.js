import React from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar';

import AuthContext from '../context/AuthContext';
import {Layout} from "antd"
const {Content,Footer,Sider}= Layout
import 'antd/dist/antd.css';
export default ({children}) => {
  return (
    <AuthContext>
    <Layout>
      <Sidebar/>
      <Layout>
        <link rel="stylesheet" href="/_next/static/style.css" />
        <NavBar/>
        <Content style={{ padding: '0 50px' }}>
         {children}
        </Content>
        <Footer/>
      </Layout>
    </Layout>
    </AuthContext>
  )
}
