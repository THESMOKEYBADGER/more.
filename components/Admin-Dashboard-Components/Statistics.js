import styles from '../../styles/ManageCompanies.module.css';

const initiativeNames = {
  1: 'EarthChild project',
  2: 'Green Pop',
  3: 'Animal Ocean'
};

const Statistics = ({ totalUsers, usersPerInitiative }) => {
  return (
    <div className={styles.statistics}>
      <div className={styles.initiativesCard}>
        <h3 className={styles.statTitle}>Users per Initiative</h3>
        <div className={styles.initiativeTable}>
          {Object.entries(usersPerInitiative).map(([initiativeId, count]) => (
            <div key={initiativeId} className={styles.initiativeRow}>
              <span className={styles.initiativeName}>{initiativeNames[initiativeId]}</span>
              <span className={styles.initiativeCount}>{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
