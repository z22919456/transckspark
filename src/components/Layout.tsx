import React, { ReactNode, useState } from 'react';

import Footer from './Footer';
import LandingPage from './LandingPage';
import Navigation from './Navigation';
import Side from './Side';

type Props = {
  children: ReactNode
};

function Layout({ children }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="relative">
      <LandingPage />
      <Side onOpen={handleOpen} />
      {open && <Navigation onClose={handleClose} />}
      <div className="flex justify-end flex-nowrap">
        <div className="w-full min-h-screen mb-5 md:w-1/2">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const withDefaultLayout = (children: ReactNode) => <Layout>{children}</Layout>;

export default Layout;
