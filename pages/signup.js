import { useState } from "react";
import { useRouter } from 'next/router';
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import useBouncingBall from '../components/ballAnimation';
import styles from '../styles/SignUp.module.css';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useBouncingBall();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store the user information in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        username, // Include username in the Firestore document
        postalCode,
      });

      router.push('/ngo-choice'); // Redirect to the NGO choice page after signup
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div id="bouncingBall" className={styles.bouncingBall}></div>
      <form className={styles.form} onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Username" // New input for username
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Sign Up</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}


