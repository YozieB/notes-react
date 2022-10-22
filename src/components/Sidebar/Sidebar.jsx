import React from "react";
import styles from "./Sidebar.module.scss";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <button className={`${styles.button} {/*${styles.button_active}*/}`}>
        Все задачи
      </button>
    </div>
  );
}

export default Sidebar;
