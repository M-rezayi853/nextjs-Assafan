import React from 'react'
import Image from 'next/image'

import styles from './story-item.module.scss'

function StoryItem({ imgUrl, name, title, des }) {
  return (
    <div className='row'>
      <div className={styles.story}>
        <figure className={styles.shape}>
          <Image
            src={imgUrl} 
            alt={name} 
            className={styles.img} 
            width={200}
            height={200}
          />
          <figcaption className={styles.caption}>{name}</figcaption>
        </figure>
        <div className={styles.text}>
          <h3 className='heading-tertiary u-margin-bottom-small'>{title}</h3>
          <p className='paragraph'>{des}</p>
        </div>
      </div>
    </div>
  )
}

export default StoryItem
