import React, { useState } from 'react';
import styles from './Badge.module.scss';
function Badge({ color }) {
  return (
    /*    <i
      className={styles.badge}
      style={{ background: color }}
    ></i>*/
    <>
      <input
        className={styles.badgeInput}
        type="radio"
        value={color}
        name="colors"
        id={color}
      />
      <label style={{ background: color }} htmlFor={color} />
    </>
  );
}

export default Badge;
/*<i className={('badge', { [`badge--${'color'}`]: 'color' })}></i>*/
