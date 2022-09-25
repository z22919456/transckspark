import React, { ReactNode, useState } from 'react'
import Footer from './Footer'
import LandingPage from './LandingPage'
import NavButton from './NavButton'
import Navigation from './Navigation'
import Side from './Side'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div className="relative">
      <LandingPage />
      <Side onOpen={handleOpen} />
      {open && <Navigation onClose={handleClose} />}
      <div className="flex justify-end flex-nowrap">
        <div className="w-1/2 min-h-[calc(100vh+1px)]">
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout