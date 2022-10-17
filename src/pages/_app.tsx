import 'styles/globals.css';

import { withDefaultLayout } from 'components/Layout';
import React, { ReactElement, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ChakraProvider } from '@chakra-ui/react';

type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: P) => ReactNode
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || withDefaultLayout;
  return (
    <RecoilRoot>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </RecoilRoot>
  );
}

export default MyApp;
