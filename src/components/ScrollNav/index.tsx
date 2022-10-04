import classNames from 'classnames';
import React, { ReactNode } from 'react';
import useMeasure from 'react-use-measure';

import { ScrollNavProvider } from './Context';
import ScrollNavLink from './ScrollNavLink';

type Props = {
  children: ReactNode,
  className?: string
};

function ScrollNav({ children, className }: Props) {
  const [ref, { height }] = useMeasure();

  console.log(height);

  return (
    <ScrollNavProvider value={height} >
      <div className={classNames('sticky bg-white z-10 top-0 flex flex-wrap justify-center py-3 border-b border-black w-full gap-3', className)} ref={ref}>
        {children}
      </div>
    </ScrollNavProvider>
  );
}

export { ScrollNavLink };

export default ScrollNav;
