import classnames from 'classnames';
import React from 'react';
import { Link } from 'react-scroll';
import { LinkProps } from 'react-scroll/modules/components/Link';
import objectsToString from 'utils/objectsToString';

import { useScrollNavContext } from './Context';

type Props = Omit<LinkProps, 'ref'>;

const DEFAULT_CLASS_NAME = {
  padding: 'px-2 py-1',
  width: 'shrink-0',
  transition: 'transition-all duration-200',
  border: 'hover:border-primary border-b-4 border-transparent',
  text: 'rdx-state-active:text-primary small',
  others: 'whitespace-nowrap',
};

function ScrollTabLink({
  children, className, to, ...props
}: Props) {
  const defaultClassName = objectsToString(DEFAULT_CLASS_NAME);

  const height = useScrollNavContext();

  return (
    <Link activeClass="!border-primary" offset={-height} className={classnames(defaultClassName, className)} spy smooth to={to} {...props}>
      {children}
    </Link>
  );
}

export default ScrollTabLink;
