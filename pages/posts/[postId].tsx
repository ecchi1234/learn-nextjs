import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {}

export default function PostDetailPage(props: PostDetailPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Post Detail Page</h1>

      <div>Query: {JSON.stringify(router.query)}</div>
    </div>
  );
}
