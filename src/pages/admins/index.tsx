import { withAuthLayout } from 'components/AuthLayout';
import Button from 'components/Button';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';

function Admins() {
  const { data: session } = useSession();
  if (session) return <></>;
  return (
    <Button>
      <button onClick={() => signIn()}>登入</button>
    </Button>
  );
}

Admins.getLayout = withAuthLayout;

export default Admins;
