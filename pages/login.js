import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import styles from '../styles/Login.module.css';
import useBouncingBall from '../components/ballAnimation';


export default function Login() {
  const router = useRouter();
  const { shop } = router.query;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState(0);
  

  useBouncingBall();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === '/login') {
        setKey(prevKey => prevKey + 1);
        setLoading(false);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.data();

      if (userData.role === 'admin') {
        await router.push('/admin-dashboard');
      } else {
        const { query } = router;
        const shop = query.shop || '';
        await router.push(`/dashboard${shop ? `?shop=${shop}` : ''}`);
      }
      
      // We don't set loading to false here, as we want to keep the spinner until the new page loads
    } catch (error) {
      setError('Incorrect username or password. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.setGlobalLoading) {
      window.setGlobalLoading(loading);
    }
  }, [loading]);

  if (loading) return null; // Return null instead of a loading spinner

  return (
    <div className={styles.containerLogin} key={key}>
      <div id="bouncingBall" className={styles.bouncingBall}></div>
      <form className={styles.formLogin} onSubmit={handleLogin}>
        <h1 className={styles.title}>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Do more.</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}
