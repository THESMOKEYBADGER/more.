import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from '../../styles/manage-companies.module.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = ({ initiativeData, companyData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Donations Overview',
      },
    },
  };

  return (
    <>
    <div className={styles.graphCard}>
      <h2 className={styles.subtitle}>Donations by Initiative</h2>
      <div className={styles.chartContainer}>
        <Bar data={initiativeData} options={options} />
      </div>
      </div>

      <div className={styles.graphCard}>
      <h2 className={styles.subtitle}>Donations by Company</h2>
      <div className={styles.chartContainer}>
        <Bar data={companyData} options={options} />
      </div>
      </div>
    </>
  );
};

export default Charts;
