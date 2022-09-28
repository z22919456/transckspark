import React, { ReactNode } from 'react'
import classnames from 'classnames';

type Props = {
  children: ReactNode
  className?: string
}

function Column({ children, className }: Props) {
  return (
    <div className={classnames('flex items-center justify-center h-12 px-5 my-3 text-center border-default', className)}>
      {children}
    </div>
  )
}

export default Column