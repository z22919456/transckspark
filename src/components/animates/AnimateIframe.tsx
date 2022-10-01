import React from 'react'
import Iframe from 'react-iframe'

type Props = {}

function AnimateIframe({ }: Props) {
  return (
    <Iframe url="/animate/index.html" className="w-full h-full"></Iframe>
  )
}

export default AnimateIframe