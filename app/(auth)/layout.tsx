'use client';

import { PropsWithChildren } from 'react';
import { Logo } from './_components/logo';

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-6'>
      <Logo />
      {children}
    </div>
  );
}

export default AuthLayout;
