import Location from 'components/assets/nav/location.svg';
import Logo from 'components/assets/nav/logo.svg';
import React from 'react';

import Animates from './Animates';
import NavButton from './NavButton';

type Props = {
  onOpen: () => void
};

function Side({ onOpen }: Props) {
  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between w-full sm:z-20 md:hidden bg-default">
        <NavButton onClick={onOpen} />
        <Location className="hidden ml-auto mr-5 lg:block" />
        <Logo className="mx-auto md:mr-5" />
      </div>

      <aside className="top-0 left-0 block w-full h-[50vh] md:h-screen md:fixed md:w-1/2 bg-default">
        <div className="top-0 z-10 items-center justify-between hidden w-full md:flex bg-default">
          <NavButton onClick={onOpen} />
          <Location className="hidden ml-auto mr-5 lg:block" />
          <Logo className="mr-5" />
        </div>
        <Animates />
      </aside>
    </>
  );
}

export default Side;
