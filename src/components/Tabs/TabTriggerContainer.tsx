import React, { ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  className?: string,
  children: ReactNode
};

function TabTriggerContainer({ className, children }: Props) {
  return (
    <div className={classnames('md:sticky relative  md:bg-white z-10 top-0 flex flex-wrap justify-center py-3 border-b border-black w-full gap-3', className)}>
      {children}
    </div>
  );
}

export default TabTriggerContainer;
