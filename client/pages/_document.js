import Document, { Head, Main, NextScript } from 'next/document'
import parser from 'cookie'
import "@blueprintjs/core/lib/css/blueprint.css"
import "../static/scss/main.scss"
export default class extends Document {
  render() {
    return (
      <html>
        <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body className="pt-dark">
            <Main />
            <NextScript />
        </body>
      </html>
    )
  }
}