import React from 'react'
import Link from 'next/link'

import styles from './main-navigation.module.scss'

function MainNavigation() {
  return (
    <div className={styles.navigation}>
      <input type='checkbox' className={styles.cheakbox} id='navi-togele' name='radio' />
      <label htmlFor='navi-togele' className={styles.button} name='radio'>
        <span className={styles.icon} name='radio'>&nbsp;</span>
      </label>

      <div className={styles.background}>&nbsp;</div>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href='/'>
              <a className={styles.link}><span>01</span>ABOUT ASSA&apos;S FAN</a>
            </Link>
          </li>

          <li className={styles.item}>
            <Link href='/'>
              <a className={styles.link}><span>02</span>YOUR BENFITS</a>
            </Link>
          </li>

          <li className={styles.item}>
            <Link href='/'>
              <a className={styles.link}><span>03</span>POPULAR TOURS</a>
            </Link>
          </li>

          <li className={styles.item}>
            <Link href='/'>
              <a className={styles.link}><span>04</span>STORIES</a>
            </Link>
          </li>
          
          <li className={styles.item}>
            <Link href='/'>
              <a className={styles.link}><span>05</span>BOOK NOW</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainNavigation
