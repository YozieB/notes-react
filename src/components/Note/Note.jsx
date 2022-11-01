import React, { useState, forwardRef } from 'react';
import styles from './Note.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeNote, setDone } from '../../redux/reducers/notes';
import { AnimatePresence, motion } from 'framer-motion';
const Note = forwardRef(
  ({ id, title, isDone, onRemoveClick, disableIndicators }, ref) => {
    const dispatch = useDispatch();
    return (
      <motion.div ref={ref} layout="position" className={styles.note}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isDone}
          onChange={(e) => {
            dispatch(setDone(id));
          }}
          name="check"
          id={id}
        />
        <label htmlFor={id} />
        <div className={styles.title} style={isDone ? { opacity: 0.5 } : {}}>
          <div
            className={styles.line}
            style={isDone ? { width: '100%' } : {}}
          ></div>
          {title}
        </div>
        {!disableIndicators && (
          <div className={styles.closeBtn} onClick={onRemoveClick}></div>
        )}
      </motion.div>
    );
  },
);

const AnimatedNote = motion(Note, { forwardMotionProps: true });
export default AnimatedNote;
