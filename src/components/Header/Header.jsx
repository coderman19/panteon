import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo/logo-2.svg';
import Nav from '../Nav/Nav';
import Phone from '../Phone/Phone';

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logotype}>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.navigation}>
           <Nav />
        </div>
        <Phone />
    </div>
  )
}
                                            