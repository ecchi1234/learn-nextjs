import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsProps {}

export default function Params(props: ParamsProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Params page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
