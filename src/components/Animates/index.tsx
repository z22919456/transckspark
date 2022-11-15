import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

// import AnimateIframe from './AnimateIframe';
// import AnimateIframe2 from './AnimateIframe2';
// import EyeAnimate from './EyeAnimate';

function Animates() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return <></>;
  const random = Math.floor(Math.random() * 2);
  if (random === 1) {
    const AnimateIframe = dynamic(import('./AnimateIframe2'), { ssr: false });
    return <AnimateIframe />;
  }
  const EyeAnimate = dynamic(import('./EyeAnimate'), { ssr: false });
  return <EyeAnimate />;
}

export default Animates;
