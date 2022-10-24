import classnames from 'classnames';
import React from 'react';
import { Link, Events } from 'react-scroll';
import { LinkProps } from 'react-scroll/modules/components/Link';
import objectsToString from 'utils/objectsToString';

import { useScrollNavContext } from './Context';

type Props = Omit<LinkProps, 'ref'>;

Events.scrollEvent.register('end', () => {
  const { scrollY } = window;
  window.scroll(0, scrollY + 1);
});

const DEFAULT_CLASS_NAME = {
  padding: 'px-2 py-1',
  width: 'shrink-0',
  transition: 'transition-all duration-200',
  border: 'hover:border-primary border-b-4 border-transparent',
  text: 'small',
  others: 'whitespace-nowrap',
};

function ScrollTabLink({
  children, className, to, ...props
}: Props) {
  const defaultClassName = objectsToString(DEFAULT_CLASS_NAME);

  const height = useScrollNavContext();

  return (
    <Link activeClass="!border-primary" offset={-height + 5} hashSpy className={classnames(defaultClassName, className)} smooth="easeOutQuint" spy to={to} {...props}>
      {children}
    </Link>
  );
}

export default ScrollTabLink;
