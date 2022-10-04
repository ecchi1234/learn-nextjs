import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>Admin Layout</div>
      <div>Sidebar</div>
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
