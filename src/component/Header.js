import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headContainer}>
      <img src="" alt="Logo" />
      <h3>Pinnacle</h3>
      <nav className={styles.navbar}>
        <ul className={styles.navbar1}>
          <li className={styles.navList1}>Home </li>
          <li className={styles.navList1}>About</li>
          <li className={styles.navList1}>Contact</li>
          <li className={styles.navList1}>Signup</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
