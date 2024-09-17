// pages/admin-companies.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth, db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import DashboardLayout from '../components/DashboardLayout';
import styles from '../styles/manage-companies.module.css';

export default function ManageCompanies() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleAddCompany = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'companies'), {
        name,
        location,
      });
      router.push('/admin-dashboard');
    } catch (error) {
      console.error('Error adding company:', error);
    }
  };

  return (
    <DashboardLayout>
      <h1>Manage Companies</h1>
      <form className={styles.form} onSubmit={handleAddCompany}>
        <input
          type="text"
          placeholder="Company Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Add Company</button>
      </form>
    </DashboardLayout>
  );
}
