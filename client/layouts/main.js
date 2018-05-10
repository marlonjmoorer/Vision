import React from 'react'
import NavBar from '../components/NavBar'
import AuthContext from '../context/AuthContext';

export default ({children}) => {
  return (
    <AuthContext>
    <div className="body">
       <link rel="stylesheet" href="/_next/static/style.css" />
      <NavBar/>
      {children}
      
    </div>
    </AuthContext>
  )
}
