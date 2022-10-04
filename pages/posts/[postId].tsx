import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
  post: any;
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>; // available when fallback is true
  }
  if (!post) return null;

  return (
    <div>
      <h1>Post Detail Page</h1>

      <div>{post.title}</div>
      <div>{post.author}</div>
      <div>{post.description}</div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();
  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: true, // when fallback is blocking it will fetch data and display loading on UI, after receive data render UI
  };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  // get post id from context params
  const postId = context.params?.postId;
  if (!postId) {
    return { notFound: true };
  }
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
  const data = await response.json();
  return {
    props: {
      post: data,
    },
    revalidate: 5, // isr config
  };
};
