import React from 'react'
import Link from 'next/link'

import styles from './game-item.module.scss'

function GameItem({ title, list, price, classNameImg }) {
  return (
    <div className='col-1-of-3'>
      <div className={styles.card}>
        <div className={`${styles.side} ${styles.sideFront}`}>
          <div
            className={`${styles.picture} ${
              classNameImg === 'p1'
                ? styles.pictureP1
                : classNameImg === 'p2'
                ? styles.pictureP2
                : styles.pictureP3
            }`}
          >
            &nbsp;
          </div>
          <h4 className={styles.heading}>
            <span className={`${styles.headingSpan} ${styles.headingSpanS1}`}>
              {title}
            </span>
          </h4>
          <div className={styles.details}>
            <ul>
              <li>{list.month} month games</li>
              <li>up to {list.people} people</li>
              <li>{list.guides} game guides</li>
              <li>{list.gamers}+ top gamers</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.side} ${styles.sideBack}`}>
          <div className={styles.cta}>
            <div className={styles.priceBox}>
              <p className={styles.priceOnly}>only</p>
              <p className={styles.priceValue}>${price}</p>
            </div>

            {/* <Link href='#popup'> */}
              <a href='#popup' className='btn btn--white'>
                Buy now!
              </a>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameItem
