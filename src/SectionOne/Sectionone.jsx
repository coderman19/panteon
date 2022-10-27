import React from 'react';

import Header from '../components/Header/Header';
import Title from '../components/Title/Title';
import BigButton from '../UI/BigButton/BigButton';
import BtnArrow from '../UI/BtnArrow/BtnArrow';
import Social from '../UI/Social/Social';

import styles from './Sectionone.module.css';




export default function Sectionone() {
  return (
    <div className={styles.section}>
      <div className='container'>
        <Header />
        <Title />
        <BigButton />
        <BtnArrow />
        <Social />
     </div>
    </div>
  )
}
