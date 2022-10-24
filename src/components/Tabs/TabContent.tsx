import React, { forwardRef } from 'react';
import classnames from 'classnames';
import {
  Content, TabsContentProps,
} from '@radix-ui/react-tabs';

const TabContent = forwardRef<HTMLDivElement, TabsContentProps>(({ className, children, ...props }, ref) => (
  <Content {...props} ref={ref} className={classnames(className)}>
    {children}
  </Content>
));

TabContent.displayName = 'TabContent';

export default TabContent;
