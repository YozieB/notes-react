import { useEffect, useRef, useState } from 'react';
import styles from './Main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../redux/reducers/notes';
function Main({ children }) {
  const [inputValue, setInputValue] = useState('Фронтенд');
  const [inputWidth, setInputWidth] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isNoteMenuActive, setIsNoteMenuActive] = useState(false);
  const hiddenBlock = useRef(null);
  const input = useRef(null);
  useEffect(() => {
    setInputWidth(hiddenBlock.current.offsetWidth);
  }, [inputValue.length]);
  function onChange(e) {
    setInputValue(e.target.value);
  }
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <button onClick={() => dispatch(addNote('sad'))}>Добавить ПАПКУ</button>
      <div className={styles.wrapper}>
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
            inputValue.length === 0 && setInputValue('Без названия');
            dispatch(addNote('Без названия'));
            setDisabled(true);
          }}
          style={{
            width: inputWidth + 10,
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

export default Main;
