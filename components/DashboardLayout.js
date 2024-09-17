// components/DashboardLayout.js
import React from 'react';
import styles from '../styles/dashboard-layout.module.css'; // Import your CSS module

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1></h1>
        </header>
        <section className={styles.content}>
          {children}
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
