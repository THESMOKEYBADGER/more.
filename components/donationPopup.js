import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConfirmationAnimation from './ConfirmationAnimation';
import styles from '../styles/donationPopup.module.css'; // Ensure the path is correct

function DonationPopup({ onClose, onConfirm, shopName }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirm = () => {
    setShowConfirmation(true);

    // Call the onConfirm function to handle donation logic
    onConfirm();

    // Adjust timeout to match animation duration
    setTimeout(() => {
      setShowConfirmation(false);
      onClose(); // Close the popup after the animation
    }, 2500); // Duration should match the animation duration
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <AnimatePresence>
          {showConfirmation ? (
            <ConfirmationAnimation />
          ) : (
            <>
              <h2>Hello {shopName} Patron!</h2>
              <p>Please click the button below to log your donation.</p>
              <button className={styles.closeButton} onClick={handleConfirm}>
                Confirm Donation
              </button>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DonationPopup;