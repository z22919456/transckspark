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
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    const AnimateIframe = dynamic(import('./AnimateIframe'), { ssr: false });
    return <AnimateIframe />;
  }
  if (random === 1) {
    const AnimateIframe2 = dynamic(import('./AnimateIframe2'), { ssr: false });
    return (
      <div className='w-full h-full overflow-hidden'><AnimateIframe2 /></div>
    );
  }
  const EyeAnimate = dynamic(import('./EyeAnimate'), { ssr: false });
  return <EyeAnimate />;
}

export default Animates;
