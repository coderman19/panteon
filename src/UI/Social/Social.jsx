import React from 'react';
import styles from './Social.module.css';
import instagram from '../../img/icons/instagram.svg';
import vk from '../../img/icons/vk.svg';

export default function Social() {
  return (
    <div className={styles.social}>
      <>
        <img src={instagram} alt='инстаграм'/>
      </>
      <>
        <img src={vk} alt='вконтакте'/>
      </>
    </div>
  )
}
