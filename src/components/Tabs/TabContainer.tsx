import React, { forwardRef } from 'react';
import classnames from 'classnames';
import {
  Root, TabsProps,
} from '@radix-ui/react-tabs';

const TabContainer = forwardRef<HTMLDivElement, TabsProps>(({ className, children, ...props }, ref) => (
  <Root {...props} ref={ref} className={classnames('', className)}>
    {children}
  </Root>
));

TabContainer.displayName = 'TabContainer';

export default TabContainer;
