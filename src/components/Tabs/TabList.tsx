import React, { forwardRef } from 'react';
import classnames from 'classnames';
import {
  TabsList, TabsListProps,
} from '@radix-ui/react-tabs';

const TabList = forwardRef<HTMLDivElement, TabsListProps>(({ className, children, ...props }, ref) => (
  <TabsList {...props} ref={ref} className={classnames('', className)}>
    {children}
  </TabsList>
));

TabList.displayName = 'TabList';

export default TabList;
