import React from "react"
import Context from "./Context";
export const connect2 = Component => props => (
  <Context.Consumer>
    {context => <Component {...props} {...context} />}
  </Context.Consumer>
);
export const connect = Component =>{
  const Enhanced= props => (
    <Context.Consumer>
      {context => <Component {...props} {...context} />}
    </Context.Consumer>)
  Enhanced.getInitialProps=async(ctx)=>{
    if(Component.getInitialProps)
        return await Component.getInitialProps(ctx)
  }
  return Enhanced
}