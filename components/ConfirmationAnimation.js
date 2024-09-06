import { motion } from 'framer-motion';
import styles from '../styles/ConfirmationAnimation.module.css';

const ConfirmationAnimation = () => {
  return (
    <motion.div
      className={styles.checkmarkContainer}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, rotate: 360 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{
        duration: 0.7, // Extended duration for longer animation
        ease: "easeInOut"
      }}
    >
      <motion.div className={styles.checkmark}>
        <motion.div className={styles.check} />
      </motion.div>
    </motion.div>
  );
};

export default ConfirmationAnimation;