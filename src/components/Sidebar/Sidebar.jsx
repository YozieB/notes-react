import React, { useState, useRef } from 'react';
import styles from './Sidebar.module.scss';
import AnimatedPopup from '../Popup/Popup';
import { AnimatePresence } from 'framer-motion';
import { closeByClickOutside } from '../../utils/hooks';
import AnimatedFolder from '../Folder/Folder';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFolder,
  setActive,
  setInactive,
} from '../../redux/reducers/folders';
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
  const folders = useSelector((state) => state.folders);
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <button
        className={
          folders.find((el) => el.isActive === true)
            ? `${styles.button}`
            : `${styles.button} ${styles.button_active}`
        }
        onClick={() => dispatch(setInactive())}
      >
        Все задачи
      </button>
      <AnimatePresence>
        {folders.map((el) => (
          <AnimatedFolder
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            title={el.title}
            color={el.color}
            id={el.id}
            key={el.id}
            onRemoveClick={() => {
              dispatch(removeFolder(el.id));
            }}
            onSetActiveClick={() => {
              dispatch(setActive(el.id));
            }}
            isActive={el.isActive}
          />
        ))}
      </AnimatePresence>
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
