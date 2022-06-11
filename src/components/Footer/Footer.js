import React from "react";
import styles from "./footer.module.scss";
import { ThemeObject } from "../../context/themeContext";
import { FaDiscord } from "react-icons/fa";
import {
  BsTelegram,
  BsFacebook,
  BsTwitter,
  BsReddit,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
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
        <div className={styles.footerContent}>
          <div>
            <h3>About us</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Business Contacts</li>
              <li>Community</li>
              <li>Binance Blog</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Announcements</li>
              <li>News</li>
              <li>Notices</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <h3>Product</h3>
            <ul>
              <li>Exchange</li>
              <li>Academy</li>
              <li>Charity</li>
              <li>Card</li>
              <li>Labs</li>
              <li>Launchpad</li>
              <li>Research</li>
              <li>Trust Wallet</li>
              <li>NFT</li>
              <li>Featured market</li>
              <li>Binance Pay</li>
              <li>Binance Gift Card</li>
            </ul>
          </div>
          <div>
            <h3>Service</h3>
            <ul>
              <li>Downloads</li>
              <li>Desktop Application</li>
              <li>Buy Crypto</li>
              <li>Institutional & VIP Services</li>
              <li>Referral</li>
              <li>Execution Solution</li>
              <li>Affiliate</li>
              <li>BNB</li>
              <li>OTC Trading</li>
              <li>Listing Application</li>
              <li>P2P Merchant Application</li>
              <li>Historical Market Data</li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>Give Us Feedback</li>
              <li>Support Center</li>
              <li>Submit a request</li>
              <li>APIs</li>
              <li>Fees</li>
              <li>Trading Rules</li>
              <li>Binance Verify</li>
              <li>Law Enforcement Requests</li>
            </ul>
          </div>
          <div>
            <h3>Learn</h3>
            <ul>
              <li>Learn & Earn</li>
              <li>Browse Crypto Prices</li>
              <li>Buy BNB</li>
              <li>Buy BUSD</li>
              <li>Buy Bitcoin</li>
              <li>Buy Litecoin</li>
              <li>Buy Ripple</li>
              <li>Buy Bitcoin Cash</li>
              <li>Buy Dogecoin</li>
              <li>Buy Defi</li>
              <li>Buy SHIB</li>
              <li>Buy Tradeable Altcoins</li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li>
                <FaDiscord />
              </li>
              <li>
                <BsTelegram />
              </li>
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsTwitter />
              </li>
              <li>
                <BsReddit />
              </li>
              <li>
                <BsInstagram />
              </li>
              <li>
                <BsYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          theme
            ? `${styles.binanceDivContent}`
            : `${styles.binanceDivContent} ${styles.darkMode}`
        }
      >
        <div className={styles.content}>Binance © 2022</div>
      </div>
    </div>
  );
};

export default Footer;
