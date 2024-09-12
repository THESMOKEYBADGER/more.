import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import axios from 'axios'; // Import axios for making API calls

import DashboardLayout from '../components/DashboardLayout';
import CompanyForm from '../components/Admin-Dashboard-Components/CompanyForm';
import Statistics from '../components/Admin-Dashboard-Components/Statistics';
import TotalUsers from '../components/Admin-Dashboard-Components/TotalUsers';
import Charts from '../components/Admin-Dashboard-Components/Charts';
import CompanyList from '../components/Admin-Dashboard-Components/CompanyList';
import styles from '../styles/ManageCompanies.module.css';
import AdminRoute from '../components/Admin-Dashboard-Components/AdminRoute';
import '@mantine/core/styles.css';

const AdminDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [companies, setCompanies] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [usersPerInitiative, setUsersPerInitiative] = useState({});
  const [donationsByInitiative, setDonationsByInitiative] = useState({});
  const [donationsByCompany, setDonationsByCompany] = useState([]);
  const [users, setUsers] = useState([]); // State to store all users
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchCompanies();
      fetchUsers();
      fetchDonations();
    }
  }, [user]);

  const handleAddCompany = async (company) => {
    try {
      const docRef = await addDoc(collection(db, 'companies'), company);
      fetchCompanies(); // Refresh the list of companies
      
      // Notify all users about the new company
      await notifyUsers(company.name);
      
    } catch (error) {
      console.error('Error adding company: ', error);
    }
  };

  const notifyUsers = async (companyName) => {
    try {
      // Send a request to your API to handle email notifications
      await axios.post('/api/notify-users', {
        companyName,
        users: users.map(user => user.email) // Send only email addresses
      });
      console.log('Notification request sent for all users');
    } catch (error) {
      console.error('Error sending notification request: ', error);
    }
  };

  const fetchCompanies = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'companies'));
      const companiesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCompanies(companiesData);
    } catch (error) {
      console.error('Error fetching companies: ', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData); // Store all users
      setTotalUsers(usersData.length);

      const initiativesCount = {};
      usersData.forEach(user => {
        const initiative = user.initiative;
        if (initiative) {
          initiativesCount[initiative] = (initiativesCount[initiative] || 0) + 1;
        }
      });
      setUsersPerInitiative(initiativesCount);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  const fetchDonations = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'donations'));
      const donationsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
      // Map of numeric initiatives to their names
      const initiativeNames = {
        1: 'Earthchild',
        2: 'GreenPop',
        3: 'Animal Ocean',
      };
  
      // Calculate donations by initiative
      const donationsByInit = {};
      donationsData.forEach(donation => {
        const initiative = donation.initiative;
        if (initiative) {
          const initiativeName = initiativeNames[initiative] || 'Unknown Initiative'; // Fallback if initiative doesn't match
          donationsByInit[initiativeName] = (donationsByInit[initiativeName] || 0) + 1;
        }
      });
      setDonationsByInitiative(donationsByInit);
  
      // Calculate donations by company
      const donationsByComp = {};
      donationsData.forEach(donation => {
        const company = donation.shop;
        if (company) {
          donationsByComp[company] = (donationsByComp[company] || 0) + 1;
        }
      });
      setDonationsByCompany(Object.entries(donationsByComp).map(([company, count]) => ({ company, count })));
    } catch (error) {
      console.error('Error fetching donations: ', error);
    }
  };
  


  // Data for the charts
  const initiativeData = {
    labels: Object.keys(donationsByInitiative),
    datasets: [
      {
        label: 'Donations by Initiative',
        data: Object.values(donationsByInitiative),
        backgroundColor: '#007bff',
      },
    ],
  };

  const companyData = {
    labels: donationsByCompany.map(d => d.company),
    datasets: [
      {
        label: 'Donations by Company',
        data: donationsByCompany.map(d => d.count),
        backgroundColor: '#28a745',
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className={styles.container}>
        
      <header className={styles.header}>
        <img src="/images/more-logo-header.png" alt="Company Logo" className={styles.logo} />
      </header>
        <CompanyForm onAddCompany={handleAddCompany} />
        <div className={styles.statsWrapper}>
          <div className={styles.statsItem}>
            <TotalUsers count={totalUsers} />
          </div>
          <div className={styles.statsItem}>
            
            <Statistics usersPerInitiative={usersPerInitiative} />
          </div>
        </div>
        
        <Charts initiativeData={initiativeData} companyData={companyData} />
        </div>
        <CompanyList companies={companies} />
      
    </DashboardLayout>
  );
};

export default AdminRoute(AdminDashboard);
