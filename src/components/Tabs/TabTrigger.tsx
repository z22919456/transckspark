import React, { forwardRef, MouseEvent } from 'react';
import classnames from 'classnames';
import {
  Trigger, TabsTriggerProps,
} from '@radix-ui/react-tabs';
import objectsToString from 'utils/objectsToString';

const DEFAULT_CLASS_NAME = {
  padding: 'px-2 py-1',
  width: 'shrink-0',
  transition: 'transition-all duration-200',
  border: 'hover:border-about border-b-4 border-transparent rdx-state-active:border-about',
  text: 'rdx-state-active:text-about',
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
