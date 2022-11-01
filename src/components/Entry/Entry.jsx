import { useDispatch, useSelector } from 'react-redux';
import { forwardRef, useEffect, useRef, useState } from 'react';
import React from 'react';
import styles from './Entry.module.scss';
import { renameTitle } from '../../redux/reducers/folders';
import { AnimatePresence, motion } from 'framer-motion';
import AddNoteMenu from '../AddNoteMenu/AddNoteMenu';
import { removeNote } from '../../redux/reducers/notes';
import AnimatedNote from '../Note/Note';
const Entry = forwardRef(({ title, id, color, disableIndicators }, ref) => {
  const [inputValue, setInputValue] = useState(title);
  const [inputWidth, setInputWidth] = useState(0);
  const [disabled, setDisabled] = useState(true);
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
  const notes = useSelector((state) => state.notes);
  return (
    <motion.div layout="position" className={styles.entry} ref={ref}>
      <form
        className={styles.wrapper}
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
        {!disableIndicators && (
          <button
            onClick={() => {
              setDisabled(!disabled);
              setTimeout(() => {
                input.current.focus();
              }, 5);
            }}
            className={styles.btn}
          ></button>
        )}
      </form>

      {notes.length > 0 &&
        notes.map((el) => {
          if (el.parentId === id) {
            return (
              <AnimatedNote
                key={el.id}
                id={el.id}
                title={el.title}
                isDone={el.isDone}
                disableIndicators={disableIndicators}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                animation={{ type: 'Tween' }}
                onRemoveClick={() => dispatch(removeNote(el.id))}
              />
            );
          }
        })}

      {!disableIndicators && <AddNoteMenu id={id} />}
    </motion.div>
  );
});
const AnimatedEntry = motion(Entry, { forwardMotionProps: true });
export default AnimatedEntry;
