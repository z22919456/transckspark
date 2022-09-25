import React, { ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  className?: string,
  children: ReactNode
};

function TabTriggerContainer({ className, children }: Props) {
  return (
    <div className={classnames('sticky bg-white top-0 flex flex-wrap justify-center py-3 border-b border-black w-full space-x-3', className)}>
      {children}
    </div>
  );
}

export default TabTriggerContainer;
