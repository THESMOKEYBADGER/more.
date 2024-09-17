// components/LoadingOverlay.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import styles from '../styles/loading-overlay.module.css'; // Import the CSS module

export default function LoadingOverlay() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    loading && (
      <div className={styles.overlay}>
        <LoadingSpinner />
      </div>
    )
  );
}
