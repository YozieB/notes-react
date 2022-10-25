import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import Popup from '../Popup/Popup';
function Sidebar() {
  const [isShown, setIsShown] = useState(false);
  function openPopup() {
    setIsShown(true);
  }
  return (
    <div className={styles.sidebar}>
      <button className={`${styles.button} {/*${styles.button_active}*/}`}>
        Все задачи
      </button>
      <div className={styles.folderBtnContainer}>
        <button onClick={openPopup} className={styles.folderBtn}>
          Добавить папку
        </button>
        <Popup />
      </div>
    </div>
  );
}

export default Sidebar;
