import classnames from 'classnames';
import CloseIcon from 'components/assets/nav/close.svg';
import HamburgerIcon from 'components/assets/nav/hamburger.svg';
import React from 'react';

type Props = Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> & { close?: boolean };

function NavButton({ close = false, className, ...props }: Props) {
  return (
    <button type="button" title="nav" className={classnames('w-[70px] flex justify-center items-center h-[70px] p-5 rounded-none bg-white/10 hover:bg-default transition-all duration-150', className)} {...props}>
      {close ? <CloseIcon className="w-full h-full m-auto" /> : <HamburgerIcon className="w-full h-full m-auto" />}
      {' '}
    </button >
  );
}

export default NavButton;
