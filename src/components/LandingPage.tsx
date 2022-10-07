import classnames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function LandingPage() {
  const [show, setShow] = useState(true);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={classnames('fixed left-0 z-50 w-screen h-screen p-10 bg-default duration-300 transition-all ease', !show && '-translate-y-full opacity-0')}>
      <div className="relative hidden w-full h-1/2 sm:block">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/eyes-md.png`} layout="fill" objectPosition="top" objectFit='contain' alt="" ></Image>
      </div>
      <div className="block w-full pt-16 sm:hidden h-3/4">
        <div className="relative w-full h-full">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/eyes.png`} layout="fill" objectPosition="top" objectFit='contain' alt="" ></Image>
        </div>
      </div>
      <div className="relative hidden w-full h-1/2 md:block">
        <Image className="" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/info-md.png`} layout="fill" objectPosition="bottom" objectFit='contain' alt="" ></Image>
      </div>
      <div className="relative hidden w-full h-1/2 sm:block md:hidden">
        <Image className="hidden md:block lg:hidden" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/info-sm.png`} layout="fill" objectPosition="bottom" objectFit='contain' alt="" ></Image>
      </div>
      <div className="relative block w-full h-1/4 sm:hidden">
        <Image className="hidden md:block lg:hidden" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/info.png`} layout="fill" objectPosition="bottom" objectFit='contain' alt="" ></Image>
      </div>
    </div>
  );
}

export default LandingPage;
