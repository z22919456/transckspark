import React, { ReactNode } from 'react';

function PageNotFound() {
  return (
    <div>404 Page Not Found!</div>
  );
}

PageNotFound.getLayout = (Page: ReactNode) => <>{Page}</>;

export default PageNotFound;
