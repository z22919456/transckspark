import { ButtonProps, Button } from '@chakra-ui/react';
import React from 'react';
import classnames from 'classnames';

type Props = ButtonProps & { active?: boolean };

function ToolbarButton({
  className, active = false, children, ...props
}: Props) {
  return (
    <Button
      type="button"
      size="sm"
      className={classnames(active && '!bg-black text-white hover:!bg-gray-700', className)}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ToolbarButton;
