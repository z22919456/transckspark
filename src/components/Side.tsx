import Location from 'components/assets/nav/location.svg';
import Logo from 'components/assets/nav/logo.svg';
import React from 'react';

import EyeAnimate from './animates/EyeAnimate';
import NavButton from './NavButton';

type Props = {
  onOpen: () => void
}

function Side({ onOpen }: Props) {
  return (
    <aside className="fixed top-0 left-0 w-1/2 h-screen bg-default">
      <div className="flex items-center justify-between w-full">
        <NavButton onClick={onOpen} />
        <Location className="hidden ml-auto mr-5 lg:block" />
        <Logo className="mr-5" />
      </div>
      {/* <AnimateIframe /> */}
      <EyeAnimate />
    </aside>
  )
}

export default Side