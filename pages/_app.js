// pages/_app.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/App.module.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Expose setLoading function globally
    window.setGlobalLoading = setLoading;

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
      delete window.setGlobalLoading;
    };
  }, [router]);

  return (
    <>
      <Head>
        <link rel="icon" href="/images/new-favicon.png" />
      </Head>

      <Layout>
        {loading && (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
          </div>
        )}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;