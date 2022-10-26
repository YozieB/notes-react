import React, { forwardRef, useState } from 'react';
import styles from './Popup.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '../Badge/Badge';
import uuid from 'react-uuid';
import { addFolder } from '../../redux/reducers/folders';
import { motion } from 'framer-motion';
const Popup = forwardRef(({ setIsShown, onClose, isShown }, ref) => {
  const [colorButtonState, setColorButtonState] = useState(undefined);
  const [inputValue, setInputValue] = useState('');
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();
  const uniqueId = uuid().slice(0, 8);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addFolder(inputValue, uniqueId, colorButtonState || '#c9d1d3'));
    setInputValue('');
    setIsShown(false);
  };

  return (
    <div
      ref={ref}
      className={
        /*!isShown ? styles.popup : `${styles.popup} ${styles.popupVisible}`*/
        styles.popup
      }
    >
      <form
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <input
          className={styles.textInput}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Название папки"
          required
        />
        <div
          className={styles.badgeContainer}
          onChange={(e) => setColorButtonState(e.target.value)}
        >
          {colors.map((el) => (
            <Badge key={el} color={el} />
          ))}
        </div>
        <button className={styles.submitBtn} type="submit">
          Добавить
        </button>
      </form>
      <button className={styles.closeBtn} onClick={onClose}></button>
    </div>
  );
});

const AnimatedPopup = motion(Popup, { forwardMotionProps: true });

export default AnimatedPopup;
