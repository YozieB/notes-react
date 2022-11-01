import React, { useState } from 'react';
import styles from './AddNoteMenu.module.scss';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/reducers/notes';
import uuid from 'react-uuid';
function AddNoteMenu({ id }) {
  const [isNoteMenuActive, setIsNoteMenuActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const uniqueId = uuid().slice(0, 8);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(inputValue, id, uniqueId));
    setInputValue('');
    setIsNoteMenuActive(false);
  };
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
        <form onSubmit={handleFormSubmit}>
          <input
            minLength="3"
            maxLength="30"
            type="text"
            className={styles.addNoteInput}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
        </form>
      )}
    </>
  );
}

export default AddNoteMenu;
