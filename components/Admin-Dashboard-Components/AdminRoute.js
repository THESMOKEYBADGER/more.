import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const AdminRoute = (WrappedComponent) => {
  return function AdminRouteWrapper(props) {
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const auth = getAuth();
      const db = getFirestore();

      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          // Check if the user has admin privileges
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists() && docSnap.data().role === 'admin') {
            setIsAdmin(true);
          } else {
            router.push('/not-authorized'); // Redirect to a "Not Authorized" page
          }
        } else {
          router.push('/login'); // Redirect to login if not authenticated
        }

        setLoading(false);
      });

      return () => unsubscribe(); // Clean up subscription on unmount
    }, [router]);

    if (loading) {
      return <div>Loading...</div>; // Optionally show a loading state
    }

    if (!isAdmin) {
      return null; // Optionally show a "not authorized" message
    }

    return <WrappedComponent {...props} />;
  };
};

export default AdminRoute;
