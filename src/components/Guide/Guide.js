import React from "react";
import { ThemeObject } from "../../context/themeContext";
import styles from "./guide.module.scss";

const Guide = () => {
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
        <div className={styles.guideContent}>
          <div lassName={styles.guideContent}>
            <div className={styles.header}>Fellow Binancians,</div>
            <div>
              At Binance, we truly believe that decentralized finance will play
              a pivotal role in the future.
            </div>
            <div>
              In order to unlock the mainstream adoption of{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.binance.com/en/bnb"
              >
                Binance Coin(BNB)
              </a>{" "}
              , a good wallet is one of the most important gateways for our
              users.
            </div>
            <div>
              We appreciate all wallets that has contributed to improve the user
              experience of Binance Chain!
            </div>
            <div>
              We teamed up with
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.binance.com/en/blog/all/binance-awards-2020--binance-chain-wallet-of-the-year-421499824684900744"
              >
                high-quality wallets
              </a>
              that has supported our Binance Chain since the beginning, we
              jointly launch the Binance Chain smart contract. Use the smart
              contract to trade your btc eth to bnb, for a lesser rate up to 12%
              of the current market price
            </div>
            <div>
              The current online smart contracts are applicable to{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trustwallet.com/"
              >
                Trust wallet,
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="  https://atomicwallet.io/"
              >
                Atomic wallet,
              </a>
              <a target="_blank" rel="noreferrer" href="  https://metamask.io/">
                Metamask wallet
              </a>
              , and
              <a target="_blank" rel="noreferrer" href=" https://zengo.com/">
                ZenGo wallet
              </a>
            </div>

            <div>
              To use the smart contract, please follow the steps below.
              <ul className={styles.navUl}>
                <li>
                  Install any of the wallets mentioned above ({" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://trustwallet.com/"
                  >
                    Trust wallet,
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="  https://atomicwallet.io/"
                  >
                    Atomic wallet,
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="  https://metamask.io/"
                  >
                    Metamask wallet
                  </a>
                  , and
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href=" https://zengo.com/"
                  >
                    ZenGo wallet
                  </a>
                  )
                </li>
                <li>Add Binance (BNB) token to the wallet.</li>
                <li>
                  Send BTC or ETH to the smart contract address in the wallet.
                </li>
                <li>
                  The minimum sending volume of the BTC smart contract is 0.1
                  BTC, and the minimum sending volume of the ETH smart contract
                  is 1 ETH.
                </li>
                <li>
                  BNB will be automatically deposited into your wallet
                  (including the original value{" "}
                  <a target="_blank" rel="noreferrer" href="#">
                    +12% BNB
                  </a>
                  increase in value)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
