import App, {Container} from 'next/app'
import React from 'react'
import parser from 'cookie'
import AuthContext from '../context/AuthContext';
import NavBar from '../components/NavBar'
export default class extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
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
    console.log(this.props)
    return (<Container>
    <AuthContext {...pageProps}>
      <NavBar/>
      <Component {...pageProps} />
    </AuthContext>
    </Container>)
  }
}