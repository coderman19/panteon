import React from 'react';
import styles from './BigButton.module.css';
import offer from '../../img/icons/bigButton (1).svg';

export default function BigButton() {
  return (
    <div className={styles.bigbutton}>
      <img className={styles.offerBtn} src={offer} alt='консультация' />
    </div>
  )
}
