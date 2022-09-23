import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import classnames from 'classnames';

type Props = {}

function LandingPage({ }: Props) {
  const [show, setShow] = useState(true);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setShow(false);
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  console.log(show)

  return (
    <div className={classnames("fixed left-0 z-10 w-screen h-screen p-10 bg-default duration-300 transition-all ease", !show && '-translate-y-full opacity-0')}>
      <div className="relative w-full h-1/2">
        <Image src="/eyes.png" layout="fill" objectPosition="top" objectFit='contain' ></Image>
      </div>
      <div className="relative w-full h-1/2">
        <Image src="/info.png" layout="fill" objectPosition="bottom" objectFit='contain' ></Image>
      </div>
    </div>
  )
}

export default LandingPage