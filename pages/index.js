// pages/index.js
import styles from '../styles/home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/more-logo.png" // Path to your image in the public directory
        alt="Company Logo"
        width={200} // Adjust width as needed
        height={200} // Adjust height as needed
        className={styles.logo} // Optional: Add a CSS class for styling
      />
      <p className={styles.subtitle}>Cast a pebble and watch the waves roll</p>
      
      
      <a href="/login" className={styles.button}>Login</a>
      <br></br>
      <a href="/signup" className={styles.button}>Sign Up</a>
      <footer className={styles.footer}>
        <p>&copy; 2024 more. All rights reserved.</p>
      </footer>
    </div>
  );
}
