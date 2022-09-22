import React, { ReactNode } from 'react'
import Footer from './Footer'
import NavButton from './NavButton'
import Side from './Side'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="relative">
      <div className="flex flex-nowrap">
        <Side />
        <div className="w-full h-screen">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout