import React, { useEffect, useState } from 'react'
import TitleSvg from 'components/assets/title.svg'
import Link from 'next/link'
import dayjs from 'dayjs'
import Header from 'components/header'

type Props = {}

function About({ }: Props) {

  return (
    <div className="h-screen">
      <Header className="from-about" />
    </div>
  )
}

export default About