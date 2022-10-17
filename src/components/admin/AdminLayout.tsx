import { ChakraProvider, LightMode } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';
import AdminHeader from './AdminHeader';
import theme from './themes';

type Props = {
  session: Session
  children: ReactNode

};

function AdminLayout({ children, session }: Props) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <div className="flex h-screen overflow-hidden flex-nowrap">
          <AdminHeader />
          <main className="w-full p-5 overflow-scroll">
            {children}
          </main>
        </div>
      </SessionProvider>
    </ChakraProvider>
  );
}

export const withAdminLayout = (children: ReactNode, props: Props) => <AdminLayout {...props}>{children}</AdminLayout>;

export default AdminLayout;
