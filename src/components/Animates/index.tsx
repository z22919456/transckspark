import React, { useEffect, useState } from 'react';

import AnimateIframe from './AnimateIframe';
import EyeAnimate from './EyeAnimate';

function Animates() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  // TODO: create loading animation
  if (!hasMounted) return <></>;
  const random = Math.floor(Math.random() * 2);
  if (random === 0) return <AnimateIframe />;
  return <EyeAnimate />;
}

export default Animates;
