import classnames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import eyesMd from 'images/landingPage/eyes-md.png';
import eyes from 'images/landingPage/eyes.png';
import infoMd from 'images/landingPage/info-md.png';
import infoSm from 'images/landingPage/info-sm.png';
import info from 'images/landingPage/info.png';

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
        <Image placeholder="blur" blurDataURL="/image_loading.jpg" priority src={eyesMd} layout="fill" objectPosition="top" objectFit='contain' alt="" ></Image>
      </div>
      <div className="block w-full pt-16 sm:hidden h-3/4">
        <div className="relative w-full h-full">
          <Image placeholder="blur" blurDataURL="/image_loading.jpg" priority src={eyes} layout="fill" objectPosition="top" objectFit='contain' alt="" ></Image>
        </div>
      </div>
      <div className="relative hidden w-full h-1/2 md:block">
        <Image placeholder="blur" blurDataURL="/image_loading.jpg" priority className="" src={infoMd} layout="fill" objectPosition="bottom" objectFit='contain' alt="" ></Image>
      </div>
      <div className="relative hidden w-full h-1/2 sm:block md:hidden">
        <Image placeholder="blur" blurDataURL="/image_loading.jpg" priority className="hidden md:block lg:hidden" src={infoSm} layout="fill" objectPosition="bottom" objectFit='contain' alt="" ></Image>
      </div>
      <div className="relative block w-full h-1/4 sm:hidden">
        <Image placeholder="blur" blurDataURL="/image_loading.jpg" priority className="hidden md:block lg:hidden" src={info} layout="fill" objectPosition="bottom" objectFit='contain' alt="" ></Image>
      </div>
    </div>
  );
}

export default LandingPage;
