import React from "react";
import { ThemeObject } from "../../context/themeContext";
import styles from "./miniNavBar.module.scss";
import { SidebarData } from "./SiderBar";

const MiniNavBar = () => {
  const { theme } = ThemeObject();

  return (
    <div className={styles.ParentDiv}>
      <div
        className={
          theme
            ? `${styles.container}`
            : `${styles.container} ${styles.darkMode}`
        }
      >
        <div className={styles.navbarContent}>
          <nav>
            <ul>
              {SidebarData.map((list, index) => {
                return <li key={index}>{list.path}</li>;
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MiniNavBar;
