import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import styles from './Entry.module.scss';
import { renameTitle } from '../../redux/reducers/folders';
function Entry({ title, id, color }) {
  const [inputValue, setInputValue] = useState(title);
  const [inputWidth, setInputWidth] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isNoteMenuActive, setIsNoteMenuActive] = useState(false);
  const hiddenBlock = useRef(null);
  const input = useRef(null);
  const setTitle = () => {
    inputValue.length === 0
      ? dispatch(renameTitle('Без названия', id))
      : dispatch(renameTitle(inputValue, id));
  };
  useEffect(() => {
    setInputValue(title);
  }, [title]);

  useEffect(() => {
    setInputWidth(hiddenBlock.current.offsetWidth);
  }, [inputValue.length]);
  function onChange(e) {
    setInputValue(e.target.value);
  }
  const dispatch = useDispatch();
  return (
    <div className={styles.entry}>
      <div className={styles.wrapper}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTitle();
          }}
        >
          <input
            spellCheck={false}
            ref={input}
            type="text"
            className={styles.title}
            onChange={onChange}
            value={inputValue}
            maxLength="25"
            disabled={disabled}
            onBlur={() => {
              setTitle();
              setDisabled(true);
            }}
            style={{
              width: inputWidth + 10,
              color: color,
            }}
          />
          <span className={styles.hiddenBlock} ref={hiddenBlock}>
            {inputValue}
          </span>
          <button
            onClick={() => {
              setDisabled(!disabled);
              setTimeout(() => {
                input.current.focus();
              }, 5);
            }}
            className={styles.btn}
          ></button>
        </form>
      </div>
      {/* Тут будут заметки */}
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
    </div>
  );
}

export default Entry;
