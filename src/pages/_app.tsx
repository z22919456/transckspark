import 'styles/globals.css';

import { withDefaultLayout } from 'components/Layout';
import React, { ReactElement, ReactNode } from 'react';
// import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';

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
      {getLayout(<Component {...pageProps} />, pageProps)}
    </>
  );
}

export default MyApp;
