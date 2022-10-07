import React from 'react';
import Iframe from 'react-iframe';

function AnimateIframe() {
  return (
    <Iframe url={`${process.env.NEXT_PUBLIC_BASE_PATH}/animate/index.html`} className="w-full h-full"></Iframe>
  );
}

export default AnimateIframe;
