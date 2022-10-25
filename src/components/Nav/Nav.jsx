import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.nav}>
       <ul>
                <li>
                    <a href="#">О нас</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Галерея</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Абонементы</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Тренеры</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Контакты</a>
                </li>
            </ul>
    </div>
  )
}
