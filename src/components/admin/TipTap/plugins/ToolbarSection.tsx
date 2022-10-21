import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

const Divider = () => <div className="h-6 border-l-2 border-gray-300 w-0 !ml-2 !mr-1" />;

function ToolbarSection({ children }: Props) {
  return (
    <div className="flex items-center px-1 space-x-1">
      {children}
      <Divider />
    </div>
  );
}

export default ToolbarSection;
