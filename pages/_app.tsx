import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppPropsWithLayout } from '@/models';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />;
}

export default MyApp;
