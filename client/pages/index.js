import React from 'react'
import page from './page'


const Index= (props) => {
  console.log(props)
  return (
     <p>y</p>
  )
}

Index.getInitialProps= async(ctx)=>{
  console.log("object")
  return{}
}

export default Index