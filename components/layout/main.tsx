import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>Main Layout</div>
      <Link href={'/about'}>
        <a>About</a>
      </Link>
      <Link href={'/home'}>
        <a>Home</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}
