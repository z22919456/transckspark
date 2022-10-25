import React, { ReactNode } from 'react';

function ServerSideError() {
  return (
    <div>500 Server Side Error</div>
  );
}

ServerSideError.getLayout = (Page: ReactNode) => <>{Page}</>;

export default ServerSideError;
