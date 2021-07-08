import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image 
          src='/images/new-logo-white.png' 
          alt='Assassin' 
          className={styles.logo} 
          width={80}
          height={80}
        />
      </div>

      <div className={styles.textBox}>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>An attractive place</span>
          <span className='heading-primary--main-bottom'>for&mdash;<span className='heading-primary--sub'>Assassin&apos;s Creed</span>&mdash;fans</span>
        </h1>
        <a href='#section-games' className='btn btn--white btn--animated'>Discover our games</a>
      </div>
    </header>
  )
}

export default Header
