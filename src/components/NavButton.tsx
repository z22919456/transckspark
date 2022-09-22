import React from 'react'
import HamburgerIcon from 'components/assets/nav/hamburger.svg'
import CloseIcon from 'components/assets/nav/close.svg'

type Props = React.HTMLProps<HTMLButtonElement> & { close?: boolean }

function NavButton({ close = false, ...props }: Props) {
  return (
    <button type="button" className="w-[70px] flex justify-center items-center h-[70px] p-5 rounded-none bg-default">
      {close ? <CloseIcon className="w-full h-full m-auto" /> : <HamburgerIcon className="w-full h-full m-auto" />}
      {' '}
    </button>
  )
}

export default NavButton