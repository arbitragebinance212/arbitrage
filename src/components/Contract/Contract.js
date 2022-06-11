import React, { useState } from "react";
import { ModalObject } from "../../context/modalContext";
import { ThemeObject } from "../../context/themeContext";
import styles from "./contract.module.scss";
import ethQR from "../../assets/ethQR.jpeg";
import btcQR from "../../assets/btcQR.jpeg";

const Contract = () => {
  const { theme } = ThemeObject();
  const { toggleModalFunction, setConfig, config } = ModalObject();

  return (
    <div className={styles.ParentDiv}>
      <div
        className={
          theme
            ? `${styles.container}`
            : `${styles.container} ${styles.darkMode}`
        }
      >
        <div className={styles.contractContent}>
          <div className={styles.ethContract}>
            <h3>ETH Smart Contract</h3>
            <h4>Profit Calculation:</h4>
            <nav>
              <li>
                Suppose the price of ETH is $2000 and the price of BNB is $300
              </li>
              <li>
                In your wallet, send 1 ETH to the smart contract ($2000), and
                you will receive $2000+($2000×12%)=$2240 which is 7.46 BNB, $240
                gain
              </li>
            </nav>
            <div
              className={styles.addressModal}
              onClick={() => {
                toggleModalFunction();
                setConfig({
                  src: ethQR,
                  address: "0x51044db4554A60e676D8B61116a0e97E0cE69c43",
                  coin: "ETH",
                });
              }}
            >
              [Click to view ETH smart contract] ➤
            </div>
          </div>
          <div className={styles.btcContract}>
            <h3>BTC Smart Contract</h3>
            <h4>Profit Calculation:</h4>
            <nav>
              <li>
                Suppose the price of BTC is $30000 and the price of BNB is $300
              </li>
              <li>
                In your wallet, send 1 BTC to the smart contract ($30000), and
                you will receive $30000+($30000×12%)=$33600 which is 112 BNB,
                $240 gain
              </li>
            </nav>
            <div
              className={styles.addressModal}
              onClick={() => {
                toggleModalFunction();
                setConfig({
                  src: btcQR,
                  address: "bc1q9hevscvjnu85ux08c6ykdx2w6xmpmwfdpudhpm",
                  coin: "BTC",
                });
              }}
            >
              [Click to view BTC smart contract] ➤
            </div>
          </div>
          <div className={styles.warning}>
            <h4>Note:</h4>
            <nav>
              <li>
                The profit margin may fluctuate during the activity, but it will
                not be less than 10%.
              </li>
              <li>
                The minimum sending volume of BTC smart contract is 0.1 BTC, and
                the minimum sending volume of ETH smart contract is 1 ETH.
              </li>
              <li>
                The activity will continue until the contract pool of 600,000
                BNB is issued (Expected by August 2022).
              </li>
              <li>
                After the activity finished, if you send BTC or ETH to the smart
                contract, your coins will be automatically returned to your
                wallet and no profit will be generated.
              </li>
            </nav>
            <div className={styles.risk}>
              <span>Risk warning: </span>
              Cryptocurrency investment is subject to high market risk. Binance
              is not responsible for any direct, indirect or consequential
              losses as a result of the trading competition. Please make your
              investments with caution.
              <nav>
                <ul>
                  <li>Thanks for your support!</li>
                  <li> Binance Team</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={styles.request}>
            <span>
              Have more questions?{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://binance.zendesk.com/hc/en-us/requests/new"
              >
                submit a request
              </a>
            </span>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default Contract;
