import { useState } from 'react';
import styles from '../../styles/ManageCompanies.module.css';

const CompanyForm = ({ onAddCompany }) => {
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCompany({ name: companyName, location });
    setCompanyName('');
    setLocation('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Company</button>
    </form>
  );
};

export default CompanyForm;
