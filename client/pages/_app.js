import App, {Container} from 'next/app'
import React from 'react'
import parser from 'cookie'
import NavBar from '../components/NavBar'
import { ContextMenu } from '@blueprintjs/core';
import {Provider} from 'phaze';
import store from '../store';

import api from '../api';

class Main extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    ctx.store=store
    const {req}=ctx
    if (req && req.headers) {
      const cookies = req.headers.cookie;
      if (typeof cookies === 'string') {
        const {token}= parser.parse(cookies);
        console.log("Setting Token")
        if (token) {
              store.commit("LOGIN",token)
              api.defaults.headers.common={
                "Authorization":`JWT ${token}`,
                'Content-Type': 'application/json'
              }
        }

      }
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {pageProps}
  }

  render () {
    const {Component, pageProps,children} = this.props
    return (
    <Container>
      <Provider store={store}>
        <NavBar/>
        <Component {...pageProps}/>
      </Provider>
    </Container>)
  }
}
export default  Main