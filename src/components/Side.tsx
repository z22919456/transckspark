import React from 'react'
import NavButton from './NavButton'
import Logo from 'components/assets/nav/logo.svg'

type Props = {}

function Side({ }: Props) {
  return (
    <aside className="w-full h-screen bg-default">
      <div className="flex items-center justify-between w-full">
        <NavButton />
        <Logo className="mr-5" />
      </div>
    </aside>
  )
}

export default Side