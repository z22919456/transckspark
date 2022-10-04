import React from 'react';

import { Ball1, Ball2, Ball3 } from './balls';
import Eye from './Eye';

function EyeAnimate() {
  return (
    <div className="flex flex-col items-center justify-around w-full h-[calc(100%-70px)] space-y-5">
      <Eye ball={Ball1} />
      <Eye ball={Ball2} />
      <Eye ball={Ball3} />
    </div>
  );
}

export default EyeAnimate;
