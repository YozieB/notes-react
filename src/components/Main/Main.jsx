import styles from './Main.module.scss';
function Main({ children }) {
  return (
    <div className={styles.main}>
      <div>{children}</div>
    </div>
  );
}

export default Main;
