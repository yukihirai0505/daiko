import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-145112640-3"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-145112640-3');})();`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
