import React from 'react'
import classnames from 'classnames';
import objectsToString from 'utils/objectsToString';
import { Link } from 'react-scroll';
import { LinkProps } from 'react-scroll/modules/components/Link'
import { useScrollNavContext } from './Context';

interface Props extends Omit<LinkProps, 'ref'> { }

const DEFAULT_CLASS_NAME = {
  padding: 'px-2 py-1',
  width: 'shrink-0',
  transition: 'transition-all duration-200',
  border: 'hover:border-about border-b-4 border-transparent',
  text: 'rdx-state-active:text-about',
  others: 'whitespace-nowrap',
};

function ScrollTabLink({ children, className, to, ...props }: Props) {

  const defaultClassName = objectsToString(DEFAULT_CLASS_NAME);

  const height = useScrollNavContext()

  console.log({ height })

  return (
    <Link activeClass="border-about" offset={-height} className={classnames(defaultClassName, className)} spy smooth to={to} {...props}>
      <small>
        {children}
      </small>
    </Link>
  )
}

export default ScrollTabLink