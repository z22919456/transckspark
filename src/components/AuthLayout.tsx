import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import React, { ReactNode } from 'react';

type Props = {
  session: Session
  children: ReactNode

};

function AuthLayout({ children, session }: Props) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}

export const withAuthLayout = (children: ReactNode, props: Props) => <AuthLayout {...props}>{children}</AuthLayout>;

export default AuthLayout;
