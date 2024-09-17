import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import styles from '../styles/initiative-switcher.module.css';

const initiativeNames = {
  1: 'EarthChild project',
  2: 'Green Pop',
  3: 'Animal Ocean',
};

const initiativeColors = {
  1: '#5b3283', // EarthChild project
  2: '#5b3283', // Green Pop
  3: '#5b3283', // Animal Ocean
};

function InitiativeSwitcher({ userId, currentInitiative, onUpdateInitiative, isVisible }) {
  const [selectedInitiative, setSelectedInitiative] = useState(currentInitiative);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInitiativeChange = async (initiative) => {
    setSelectedInitiative(initiative);
    try {
      await updateDoc(doc(db, 'users', userId), {
        initiative: initiative,
      });
      onUpdateInitiative(initiative); // Update parent component state
      setShowConfirmation(true); // Show confirmation popup
      setTimeout(() => setShowConfirmation(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error('Error updating initiative: ', error);
    }
  };

  return (
    <div className={`${styles.sidebar} ${isVisible ? styles.sidebarVisible : ''}`}>
      
      {Object.entries(initiativeNames).map(([initiativeId, initiativeName]) => (
        <button
          key={initiativeId}
          className={styles.initiativeButton}
          style={{
            backgroundColor: selectedInitiative === Number(initiativeId) 
              ? initiativeColors[initiativeId] 
              : '#b4d6cd', // Default button color
          }}
          onClick={() => handleInitiativeChange(Number(initiativeId))}
        >
          {initiativeName}
        </button>
      ))}
      {showConfirmation && (
        <div className={styles.confirmationPopup}>
          You now support {initiativeNames[selectedInitiative]}.
        </div>
      )}
    </div>
  );
}

export default InitiativeSwitcher;
