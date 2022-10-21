import { withAdminLayout } from 'components/admin/AdminLayout';
import Button from 'components/Button';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';

function Admins() {
  const user = useSession();
  console.log(user);

  return (
    <Button onClick={() => signIn()}>
      登入
    </Button>
  );
}

Admins.getLayout = withAdminLayout;

export default Admins;
