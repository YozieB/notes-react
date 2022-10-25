import React, { useState } from 'react';
import styles from './Popup.module.scss';
import { useSelector } from 'react-redux';
import Badge from '../Badge/Badge';
function Popup() {
  const colors = useSelector((state) => state.colors);
  return (
    <div className={styles.popup}>
      <input
        className={styles.textInput}
        type="text"
        placeholder="Название папки"
      />
      <form>
        <div className={styles.badgeContainer}>
          {colors.map((el) => (
            <Badge key={el} color={el} />
          ))}
        </div>
        <button className={styles.submitBtn} type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default Popup;
