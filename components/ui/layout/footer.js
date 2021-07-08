import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoBox}>
        <picture className={styles.logo}>
          {/* <source srcset='/images/new-logo-white-small.png' media='(max-width: 37.5em)' /> */}
          <Image
            src='/images/new-logo-white-middle.png'
            alt='Logo image'
            width={120}
            height={120}
          />
        </picture>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <div className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href='/'>
                  <a className={styles.link}>COMPANY</a>
                </Link>
              </li>

              <li className={styles.item}>
                <Link href='/'>
                  <a className={styles.link}>CONTACT US</a>
                </Link>
              </li>

              <li className={styles.item}>
                <Link href='/'>
                  <a className={styles.link}>CAREERS</a>
                </Link>
              </li>

              <li className={styles.item}>
                <Link href='/'>
                  <a className={styles.link}>PRIVACY</a>
                </Link>
              </li>

              <li className={styles.item}>
                <Link href='/'>
                  <a className={styles.link}>TERMS</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='col-1-of-2'>
          <div className={styles.text}>
            <p className='paragraph'>
              Built my{' '}
              <Link href='/'>
                <a className={styles.link}>
                  M_HAZARA_77{' '}
                </a>
              </Link>
              for his online course
              <Link href='/'>
                <a className={styles.link}>
                  {' '}
                  ADVENCED CSS AND SASS
                </a>
              </Link>
              . Copyright © by Mahdi Rezayi. You are 100% allowed to use this
              webpage for both personal and commercial use, but NOT to claim it
              as your design. A credit to the original author, Mahdi rezayi, is
              of course highly appreciated!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
