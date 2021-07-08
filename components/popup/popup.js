import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './popup.module.scss'

function Popup() {
  return (
    <div className={styles.popup} id='popup'>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image
            src='/images/19b.jpg'
            alt='Game image'
            className={styles.img}
            width={570}
            height={300}
          />
          <Image 
            src='/images/8b.jpg' 
            alt='Game image' 
            className={styles.img} 
            width={570}
            height={300}
          />
        </div>
        <div className={styles.right}>
          {/* <Link href='/'> */}
            <a href='#section-games' className={styles.close}>
              &times;
            </a>
          {/* </Link> */}
          <h2 className='heading-secondary u-margin-bottom-small'>
            Start gaming now
          </h2>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            IMPORTANT – PLEASE READ THESE TERMS BEFORE GAMING
          </h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst
            quisque sagittis purus sit amet volutpat. Eros donec ac odio tempor
            orci dapibus ultrices in iaculis. Viverra justo nec ultrices dui
            sapien eget. Faucibus vitae aliquet nec ullamcorper sit amet. Velit
            euismod in pellentesque massa placerat. Cras semper auctor neque
            vitae tempus quam pellentesque. Sed egestas egestas fringilla
            phasellus faucibus scelerisque eleifend. Nec feugiat in fermentum
            posuere urna. Fermentum dui faucibus in ornare quam viverra orci
            sagittis. Commodo quis imperdiet massa tincidunt.
          </p>
          {/* <Link href='/'> */}
            <a href='#' className='btn btn--red u-margin-top-middle'>
              Game now
            </a>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Popup
