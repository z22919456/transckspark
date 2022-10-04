import React from 'react';
import classnames from 'classnames';

type Props = { className?: string };

function Divider({ className }: Props) {
  return (
    <div className="flex items-center justify-center my-3">
      <div className={classnames('h-6 border-l border-black', className)}></div>
    </div>
  );
}

export default Divider;
