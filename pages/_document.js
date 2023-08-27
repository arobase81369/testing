import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
      <footer>
        <script src='/js/customscript.js'></script>
      </footer>
    </Html>
  )
}
