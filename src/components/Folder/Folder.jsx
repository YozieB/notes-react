import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Folder.module.scss';
const Folder = forwardRef(
  ({ color, title, id, onRemoveClick, isActive, onSetActiveClick }, ref) => {
    const closeBtnMotion = {
      initial: { opacity: 0, y: 5 },
      hover: { opacity: 1, y: 0 },
    };
    return (
      <motion.button
        onClick={onSetActiveClick}
        initial="initial"
        whileHover="hover"
        animate="rest"
        ref={ref}
        style={isActive && { borderRadius: 4 }}
        className={
          isActive ? `${styles.button} ${styles.button_active}` : styles.button
        }
      >
        <div
          className={styles.colorIndicator}
          style={{
            backgroundColor: color,
          }}
        ></div>
        <div className={styles.name}>{title}</div>
        <motion.div
          className={styles.closeBtn}
          variants={closeBtnMotion}
          onClick={onRemoveClick}
        ></motion.div>
      </motion.button>
    );
  },
);

const AnimatedFolder = motion(Folder, { forwardMotionProps: true });

export default AnimatedFolder;
