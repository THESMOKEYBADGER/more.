import { useState, useEffect } from 'react';
import styles from '../styles/ngo-choice.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Choices() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/signup'); // Redirect to sign-up if not authenticated
      }
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, [router]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user) {
      console.error('User information not found');
      return;
    }

    const data = {
      uid: user.uid,
      email: user.email,
      postalCode: user.postalCode, // Ensure this is retrieved from your Firestore document
      initiative: selectedValue,
    };

    const response = await fetch('/api/save-user-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push('/about'); // Redirect to the about after successful submission
    } else {
      console.error('Failed to save user data');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/more-logo.png"
          alt="Company Logo"
          width={200}
          height={200}
          className={styles.logo}
        />
        <p className={styles.subtitle}>Choose your initiative</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.flexContainer}>
        <div className={styles.flexItem}>
          <div className={styles.listGroup}>
            {/* Repeat for each initiative */}
            <div className={styles.listGroupItemContainer}>
              <input
                className={styles.listGroupItemCheck}
                type="radio"
                name="listGroupCheckableRadios"
                id="radio1"
                value="1"
                checked={selectedValue === '1'}
                onChange={handleChange}
              />
              <label
                className={`${styles.listGroupItem} ${selectedValue === '1' ? styles.selected : ''}`}
                htmlFor="radio1"
              >
                EarthChild Project
                <a href="https://earthchildproject.org/" className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/box-arrow-up-right.svg"
                    alt="Link Icon"
                    width={14}
                    height={14}
                  />
                </a>
              </label>
            </div>

            <div className={styles.listGroupItemContainer}>
              <input
                className={styles.listGroupItemCheck}
                type="radio"
                name="listGroupCheckableRadios"
                id="radio2"
                value="2"
                checked={selectedValue === '2'}
                onChange={handleChange}
              />
              <label
                className={`${styles.listGroupItem} ${selectedValue === '2' ? styles.selected : ''}`}
                htmlFor="radio2"
              >
                Green Pop
                <a href="https://greenpop.org/" className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/box-arrow-up-right.svg"
                    alt="Link Icon"
                    width={14}
                    height={14}
                  />
                </a>
              </label>
            </div>

            <div className={styles.listGroupItemContainer}>
              <input
                className={styles.listGroupItemCheck}
                type="radio"
                name="listGroupCheckableRadios"
                id="radio3"
                value="3"
                checked={selectedValue === '3'}
                onChange={handleChange}
              />
              <label
                className={`${styles.listGroupItem} ${selectedValue === '3' ? styles.selected : ''}`}
                htmlFor="radio3"
              >
                Animal Ocean
                <a href="https://www.animalocean.co.za" className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/box-arrow-up-right.svg"
                    alt="Link Icon"
                    width={14}
                    height={14}
                  />
                </a>
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
