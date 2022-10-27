import React, { forwardRef } from 'react';
import styles from './Wrapper.module.scss';
import { motion } from 'framer-motion';
const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapper} style={{ borderRadius: 20 }}>
      {children}
    </div>
  );
};
export default Wrapper;
