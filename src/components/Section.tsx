import React, { ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  className?: string
  id: string
  children: ReactNode
};

function Section({ className, id, children }: Props) {
  return (
    <section id={id} className={classnames('pb-12 border-b border-black', className)}>
      {children}
    </section>
  );
}

export default Section;
