import App, {Container} from 'next/app'
import React from 'react'
import parser from 'cookie'
import NavBar from '../components/NavBar'
import { ContextMenu } from '@blueprintjs/core';
import Provider from '../Context/Provider';
import store from '../store';


class Main extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    ctx.store=store
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const {req}=ctx
    if (req && req.headers) {
      const cookies = req.headers.cookie;
      if (typeof cookies === 'string') {
        const cookiesJSON = parser.parse(cookies);
        pageProps.token = cookiesJSON.token;
      }
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