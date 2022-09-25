import React from 'react'
import classnames from 'classnames';

type Props = React.HTMLProps<HTMLButtonElement> & {
  type?: "button" | "submit" | "reset" | undefined
}

const DEFAULT_CLASS_NAME = "border border-black bg-transparent text-black hover:bg-primary h-11 w-full text-center flex items-center justify-center duration-200 transition-all ease"

function Button({ type = "button", children, className, ...props }: Props) {

  return (
    <button className={classnames(DEFAULT_CLASS_NAME, className)} type={type} {...props}>{children}</button>
  )
}

export default Button