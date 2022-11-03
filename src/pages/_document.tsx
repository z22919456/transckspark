import {
  Head, Html, Main, NextScript,
} from 'next/document';
import React from 'react';

function Document() {
  return (
    <Html lang="zh-TW">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@400;600&family=Work+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFZSSFN" height="0" width="0" style="display: none; visibility: hidden;" />',
          }}
        />
      </body>
    </Html>
  );
}

export default Document;
