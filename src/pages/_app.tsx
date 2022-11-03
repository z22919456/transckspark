import 'styles/globals.css';

import { withDefaultLayout } from 'components/Layout';
import React, { ReactElement, ReactNode } from 'react';
// import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import Script from 'next/script';

type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: P) => ReactNode
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || withDefaultLayout;
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NFZSSFN');
      `}
      </Script>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </>
  );
}

export default MyApp;
