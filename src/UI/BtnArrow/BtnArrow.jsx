import React from 'react';
import styles from './BtnArrow.module.css';
import arrowDown from '../../img/icons/arr-down.svg'

export default function BtnArrow() {
  return (
    <div className={styles.btn}>
      <img src={arrowDown} alt='arrow'/>
    </div>
  )
}
