import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo/logo.png';
import Nav from '../Nav/Nav';

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logotype}>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.navigation}>
           <Nav />
        </div>
        <div className={styles.phone}>
            <li>
                <a href="/">
                    +7 (496) 416-19-16 
                </a>
            </li>
        </div>
    </div>
  )
}
                                            