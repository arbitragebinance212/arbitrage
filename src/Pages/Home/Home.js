import React from "react";
import Contract from "../../components/Contract/Contract";
import Footer from "../../components/Footer/Footer";
import Guide from "../../components/Guide/Guide";
import MiniNavBar from "../../components/MiniNavbar/MiniNavBar";
import EthModal from "../../components/Modal/EthModal";
import Video from "../../components/Video/Video";
import { ModalObject } from "../../context/modalContext";
import styles from "./home.module.scss";

const Home = () => {
  const { toggleModalFunction, toggleModalContainer } = ModalObject();
  return (
    <div className={styles.container}>
      <EthModal toggleModalContainer={toggleModalContainer} />
      <div className={styles.miniNavbarSection}>
        <MiniNavBar />
      </div>
      <div className={styles.videoSection}>
        <Video />
      </div>

      <div className={styles.guideSection}>
        <Guide />
      </div>
      <div className={styles.contractSection}>
        <Contract />
      </div>
      <div className={styles.footerSection}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
