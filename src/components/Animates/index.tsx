import React, { useEffect, useState } from 'react';

import AnimateIframe from './AnimateIframe';
import AnimateIframe2 from './AnimateIframe2';
import EyeAnimate from './EyeAnimate';

function Animates() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  // TODO: create loading animation
  if (!hasMounted) return <></>;
  // const random = Math.floor(Math.random() * 3);
  const random = 1;
  console.log(random);
  if (random === 0) return <AnimateIframe />;
  if (random === 1) {
    return (
      <div className='w-full h-full overflow-hidden'><AnimateIframe2 /></div>
    );
  }
  return <EyeAnimate />;
}

export default Animates;
