import React, { forwardRef } from 'react';
import styles from './Wrapper.module.scss';
import { motion } from 'framer-motion';
const Wrapper = ({ children }) => {
  return (
    <motion.div
      layout="scroll"
      className={styles.wrapper}
      style={{ borderRadius: 20 }}
    >
      {children}
    </motion.div>
  );
};
export default Wrapper;
