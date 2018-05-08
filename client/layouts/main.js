import React from 'react'
import NavBar from '../components/NavBar'
import "../main.scss"
export default ({children}) => {
  return (
    <div className="body">
       <link rel="stylesheet" href="/_next/static/style.css" />
      <NavBar/>
      {children}
      
    </div>
  )
}
