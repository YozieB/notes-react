import styles from './Main.module.scss';
import { motion } from 'framer-motion';

function Main({ children }) {
  return (
    <motion.div layout="position" className={styles.main}>
      <div>{children}</div>
    </motion.div>
  );
}

export default Main;
