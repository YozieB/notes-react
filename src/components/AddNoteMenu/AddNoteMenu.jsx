import React, { useState } from 'react';
import styles from './AddNoteMenu.module.scss';

function AddNoteMenu() {
  const [isNoteMenuActive, setIsNoteMenuActive] = useState(false);
  return (
    <>
      {!isNoteMenuActive ? (
        <button
          className={styles.addNote}
          onClick={() => {
            setIsNoteMenuActive(true);
          }}
        >
          Новая задача
        </button>
      ) : (
        <>
          <input
            type="text"
            className={styles.addNoteInput}
            placeholder="Текст задачи"
          />
          <div className={styles.addNoteBtnContainer}>
            <button className={styles.addNoteBtn}>Добавить задачу</button>
            <button
              className={styles.addNoteBtn}
              onClick={() => {
                setIsNoteMenuActive(false);
              }}
            >
              Отмена
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default AddNoteMenu;
