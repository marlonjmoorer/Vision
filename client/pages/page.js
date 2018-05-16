import React, { Component,createContext } from 'react'
import parser from 'cookie'
import NavBar from '../components/NavBar';

import {withStore} from "../context"

export default (PageComponent)=>
 class Page extends Component {

  static async getInitialProps(ctx) {
        let props={}
        if(PageComponent.getInitialProps){
            const pageProps= await PageComponent.getInitialProps(ctx)
            props={...props,...pageProps}
        }
        const {req}=ctx
        if (req && req.headers) {
          const cookies = req.headers.cookie;
          if (typeof cookies === 'string') {
            const cookiesJSON = parser.parse(cookies);
            props.token = cookiesJSON.token;
          }
        }
        return props
  }
  render() {
    return (
     <div>
            <NavBar/>
           <PageComponent />
      </div> 
    )
  }
}
