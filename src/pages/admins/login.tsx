import { Provider } from 'next-auth/providers';
import { getProviders, signIn } from 'next-auth/react';
import React, { ReactNode } from 'react';

type Props = {
  providers: Provider[]
};

function SignIn({ providers }: Props) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            使用 {provider.name} 登入
          </button>
        </div>
      ))}
    </>
  );
}

SignIn.getLayout = (children: ReactNode) => <>{children}</>;

export default SignIn;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
