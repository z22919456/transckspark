import { Html, Main, Head, NextScript } from 'next/document'
import React from 'react'

type Props = {}

function Document({ }: Props) {
  return (
    <Html lang="zh-TW">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@500&family=Work+Sans:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document