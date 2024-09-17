import styles from '../../styles/manage-companies.module.css';

const CompanyList = ({ companies }) => {
  return (
    <>
      <h2 className={styles.subtitle}>Company List</h2>
      <ul className={styles.companyList}>
        {companies.map((company) => (
          <li key={company.id} className={styles.companyItem}>
            {company.name} - {company.location}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CompanyList;
