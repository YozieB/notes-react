import React, { useState, useRef, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import AnimatedPopup from '../Popup/Popup';
import { AnimatePresence } from 'framer-motion';
import { closeByClickOutside } from '../../utils/hooks';
function Sidebar() {
  const [isShown, setIsShown] = useState(false);
  const handleOpenPopup = () => {
    setIsShown(true);
  };
  const handleClosePopup = () => {
    setIsShown(false);
  };
  const popupRef = useRef(null);
  closeByClickOutside(popupRef, setIsShown);
  return (
    <div className={styles.sidebar}>
      <button className={`${styles.button} {/*${styles.button_active}*/}`}>
        Все задачи
      </button>
      <div className={styles.folderBtnContainer}>
        <button onClick={handleOpenPopup} className={styles.folderBtn}>
          Добавить папку
        </button>
        <AnimatePresence>
          {isShown && (
            <AnimatedPopup
              setIsShown={setIsShown}
              isShown={isShown}
              onClose={handleClosePopup}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              ref={popupRef}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Sidebar;
