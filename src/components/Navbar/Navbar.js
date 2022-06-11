import React, { useReducer } from "react";
import styles from "./navbar.module.scss";
import { FaMoon } from "react-icons/fa";
import { SidebarData } from "./SiderBar";
import { BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeObject } from "../../context/themeContext";
import "./toggle.css";

const Navbar = () => {
  const { toggleTheme, theme } = ThemeObject();
  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleNavIcon":
        return {
          toggleNav: !state.toggleNav,
          toggleVerticalBar: state.toggleVerticalBar,
        };
      case "toggleSidebarIcon":
        return {
          toggleNav: state.toggleNav,
          toggleVerticalBar: !state.toggleVerticalBar,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    toggleNav: false,
    toggleVerticalBar: false,
  });

  // console.log("This is the vertical state", theme);

  return (
    <div className={styles.container}>
      <div
        className={
          theme
            ? `${styles.navbarContainer}`
            : `${styles.navbarContainer} ${styles.darkMode}`
        }
      >
        <div className={styles.navbarContent}>
          <div className={styles.logoContainer}>
            <div className={styles.LogoItem}></div>
          </div>
          <div className={styles.linkContainer}>
            <div className={styles.lisItem}>
              <ul>
                {SidebarData.map((list, index) => {
                  return <li key={index}>{list.title}</li>;
                })}
              </ul>
            </div>
            <div className={styles.iconContainer}>
              <div className={styles.toggleParent}>
                {!theme ? (
                  <FaMoon onClick={toggleTheme} />
                ) : (
                  <BsFillSunFill onClick={toggleTheme} />
                )}
              </div>
              <div
                className={styles.hamburgerParent}
                onClick={() => {
                  dispatch({ type: "toggleNavIcon" });
                  dispatch({ type: "toggleSidebarIcon" });
                }}
              >
                {!state.toggleNav && <GiHamburgerMenu />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "toggleNavIcon" });
          dispatch({ type: "toggleSidebarIcon" });
        }}
        className={
          state.toggleVerticalBar
            ? `${styles.verticalBarContainer}`
            : `${styles.verticalBarContainer} ${styles.active}`
        }
      >
        <div
          className={
            theme
              ? `${styles.contentContainer}`
              : `${styles.contentContainer} ${styles.darkMode2}`
          }
        >
          <div className={styles.NavIconContainer}>
            <div className={styles.NavIconContentDiv}>
              {state.toggleNav && <AiOutlineClose />}
            </div>
          </div>
          <div className={styles.verticalContent}>
            <div className={styles.navLinks}>
              <ul>
                <li>Log in</li>
                <li>
                  <button>Register</button>
                </li>
              </ul>
            </div>

            <div className={styles.themeContainer}>
              <div className={styles.themeContent}>
                <div className={styles.logoContent}>
                  <div className={styles.logoItem}></div>
                  <div
                    className={
                      theme
                        ? `${styles.logoText}`
                        : `${styles.logoText} ${styles.darkMode2}`
                    }
                  >
                    Theme
                  </div>
                </div>
                <div>
                  <label class="switch">
                    <input
                      type="checkbox"
                      onChange={() => {
                        toggleTheme();
                      }}
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
