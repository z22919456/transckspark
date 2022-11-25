import { NextPage, NextPageWithLayout } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

declare module 'next' {
  type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement, pageProps: P) => ReactNode
  };
}

declare module 'next/app' {
  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  };
}
