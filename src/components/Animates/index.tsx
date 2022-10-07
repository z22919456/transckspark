import React from 'react';

import AnimateIframe from './AnimateIframe';
import EyeAnimate from './EyeAnimate';

function Animates() {
  const random = Math.floor(Math.random() * 2);
  if (random === 0) return <AnimateIframe />;
  return <EyeAnimate />;
}

export default Animates;
