import el from '@master/style-element.react';
import {
  AccordionContentProps,
  AccordionTriggerProps,
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from '@radix-ui/react-accordion';
import classnames from 'classnames';
import AddIcon from 'components/assets/add.svg';
import React, { forwardRef } from 'react';

export const Accordion = el(Root)`overflow-hidden mb-10`;
export const AccordionItem = el(Item)`overflow-hidden border-t last:border-b border-default`;

export const AccordionContent = ({ className, children }: AccordionContentProps) => (
  <Content className={classnames('overflow-hidden text-primary rdx-state-open:animate-slide-down rdx-state-closed:animate-slide-up', className)} >
    <div className="pb-5 pl-16">
      {children}
    </div>
  </Content>
);

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ className, children, ...props }, ref) => (
  <Header className="flex ">
    <Trigger {...props} ref={ref} className={classnames('group p-5 flex-nowrap flex items-center text-left bg-transparent text-base transform duration-100 ease-in-out', className)}>
      <AddIcon className="w-6 mr-5 transition-all group-rdx-state-open:rotate-45 group-hover:rotate-45" />
      <p className="flex-1">
        {children}
      </p>
    </Trigger>
  </Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';
