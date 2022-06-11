import React from "react";
import { ThemeObject } from "../../context/themeContext";
import styles from "./video.module.scss";
import bnblogo from "../../assets/bb.png";
const video = `https://firebasestorage.googleapis.com/v0/b/sms-pharm.appspot.com/o/video%2F%23Binance%20Chain%20Community%20Releases%20Whitepaper%20for%20Enabling%20Smart%20Contracts%20(Binance%20Smart%20Chain).mp4?alt=media&token=4dc28d7d-646c-461a-b447-9cf63527606a`;

const Video = () => {
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
        <div className={styles.videoContent}>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <h2>Binance Launches New Binance Chain Smart Contracts</h2>
            </div>
            <div className={styles.logo}>
              <div className={styles.logoContent}>
                <img src={bnblogo} alt={bnblogo} />
              </div>
              <div className={styles.logoText}>
                Binance{" "}
                <span className={!theme ? styles.spanDarkMode : null}>
                  2022-06-9 11:55
                </span>
              </div>
            </div>
          </div>
          <div className={styles.videoContainer}>
            <video width="850" height="600" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
