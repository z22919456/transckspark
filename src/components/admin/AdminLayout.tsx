import { ChakraProvider } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';

import AdminHeader from './AdminHeader';
import theme from './themes';

type Props = {
  session: Session
  children: ReactNode

};

type PageProps = {
  children: ReactNode
};

const Page = ({ children }: PageProps) => {
  const session = useSession();
  const router = useRouter();

  useEffect(
    () => {
      if (session.status === 'unauthenticated') {
        router.replace({
          pathname: '/admins/login',
          query: {
            redirectTo: router.pathname,
          },
        });
      }
    },
    [session],
  );

  if (session.status === 'loading' || session.status === 'unauthenticated') return <div> loading ...</div>;
  return (<div className="flex h-screen overflow-hidden flex-nowrap">
    <AdminHeader />
    <main className="w-full p-5 overflow-scroll">
      {children}
    </main>
  </div>);
};

function AdminLayout({ children, session }: Props) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Page>
          {children}
        </Page>
      </SessionProvider>
    </ChakraProvider>
  );
}

export const withAdminLayout = (children: ReactNode, props: Props) => <AdminLayout {...props}>{children}</AdminLayout>;

export default AdminLayout;
