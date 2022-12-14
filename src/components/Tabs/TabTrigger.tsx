import { TabsTriggerProps, Trigger } from '@radix-ui/react-tabs';
import classnames from 'classnames';
import React, { forwardRef } from 'react';
import objectsToString from 'utils/objectsToString';

const DEFAULT_CLASS_NAME = {
  padding: 'px-2 py-1',
  width: 'shrink-0',
  transition: 'transition-all duration-200',
  border: 'hover:border-primary border-b-4 border-transparent rdx-state-active:border-primary',
  text: 'rdx-state-active:text-primary',
  others: 'whitespace-nowrap',
};

const TabTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(({
  className, children, ...props
}, ref) => {
  const defaultClassName = objectsToString(DEFAULT_CLASS_NAME);

  return (
    <Trigger {...props} ref={ref}
      className={classnames(defaultClassName, className)}
    >
      <small>
        {children}
      </small>
    </Trigger>
  );
});

TabTrigger.displayName = 'TabTrigger';

export default TabTrigger;
