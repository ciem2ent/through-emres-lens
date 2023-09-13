import '../styles/global.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.push('/splash');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
