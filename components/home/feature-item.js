import React from 'react';

import styles from './feature-item.module.scss'

function FeatureItem({ title, text, icon }) {
  return (
    <div className='col-1-of-4'>
      <div className={styles.featureBox}>
        <i className={`${styles.icon} ${icon}`}></i>
        <h3 className='heading-tertiary u-margin-bottom-small'>
          {title}
        </h3>
        <p className='paragraph'>
          {text}
        </p>
      </div>
    </div>
  );
}

export default FeatureItem;
