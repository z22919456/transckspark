import 'styles/globals.css';

import Layout from 'components/Layout';
import React from 'react';
import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </RecoilRoot>

  );
}

export default MyApp;
