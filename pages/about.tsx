import Header from '@/components/common/header';
import { MainLayout } from '@/components/layout';
// import { GetServerSideProps } from 'next';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// this is dynamic component, only render on client bc we set ssr option = false
// const Header = dynamic(() => import('@/components/common/header'), { ssr: false });
export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();
  console.log('About query: ', JSON.stringify(router.query));
  const page = router.query?.page;
  useEffect(() => {
    // iife feature of js
    (async () => {
      if (page) {
        const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
        const data = await response.json();
        setPostList(data.data);
      }
    })();
  }, [page]);
  const handleNextClick = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };
  return (
    <div>
      <h1>About Page</h1>
      <Header />

      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextClick}>Next Page</button>
    </div>
  );
}
AboutPage.Layout = MainLayout;
export async function getStaticProps() {
  console.log('get static props');

  return {
    props: {},
  };
}
// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {},
//   };
// };
