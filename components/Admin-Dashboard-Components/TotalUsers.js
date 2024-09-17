// components/Admin-Dashboard-Components/TotalUsers.js

import styles from '../../styles/manage-companies.module.css';

const TotalUsers = ({ count }) => {
  return (
    <div className={styles.totalUsersContainer}>
      <div className={styles.totalUsersCard}>
        <h2 className={styles.totalUsersTitle}>Total Users</h2>
        <div className={styles.totalUsersCount}>{count}</div>
      </div>
    </div>
  );
};

export default TotalUsers;
