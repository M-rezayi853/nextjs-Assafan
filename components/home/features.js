import React from 'react'

import FeatureItem from './feature-item'
import styles from './features.module.scss'

const FEATURES_DATA = [
  {
    id: 'f1',
    title: 'Travel to ancient',
    text: 'From lush vibrant forests to cities, start a journey of exploration and encounters in a war torn world shaped by gods and men',
    icon: 'icon-basic-accelerator'
  },
  {
    id: 'f2',
    title: 'Fight on a new scale',
    text: 'Demonstrate your warrior\'s abilities in large with of soldiers, or your way through entire fleets in naval battles across the Sea.',
    icon: 'icon-basic-gunsight'
  },
  {
    id: 'f3',
    title: 'Forge your legend',
    text: 'Your decisions will impact how your assassin\'s unfolds. Play you make. Customize your special abilities to become a legend.',
    icon: 'icon-basic-display'
  },
  {
    id: 'f4',
    title: 'Gaze in wonder',
    text: 'The Extended View feature perspective of the environment, and you in the sandy dunes according to where you set your sights.',
    icon: 'icon-basic-webpage-multiple'
  },
]

function Features() {
  return (
    <section className={styles.sectionFeatures}>
      <div className='row'>
        {FEATURES_DATA.map(item => (
          <FeatureItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Features;
