import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';

export default function Layout({ children }) {
  const router = useRouter();
  const isLoginPath = router.pathname.startsWith('/login');

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url.startsWith('/login')) {
        window.location.reload();
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  if (isLoginPath) {
    return <>{children}</>;
  }

  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  );
}