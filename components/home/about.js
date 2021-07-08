import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './about.module.scss';

function About() {
  return (
    <section className={styles.sectionAbout}>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Exciting games for gamers people</h2>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            You&apos;re to fall in love with Assassin&apos;s fan
          </h3>
          <p className='paragraph'>
            Your decisions will impact how your assassin&apos;s unfolds. Play through
            multiple endings thanks to the new dialogue system and the choices
            you make. Customize your special abilities to become a legend.{' '}
          </p>

          <h3 className='heading-tertiary u-margin-bottom-small'>
            Play games like you never have before
          </h3>
          <p className='paragraph'>
            The Extended View feature gives you a broader perspective of the
            environment, and the Dynamic Light and Sun Effects immerse you in
            the sandy dunes according to where you set your sights.
          </p>
          <Link href='/'>
            <a className='btn-text'>Learn more &rarr;</a>
          </Link>
        </div>

        <div className='col-1-of-2'>
          <div className={styles.composition}>
            <div className={`${styles.photo} ${styles.photoP1}`}>
              <Image
                src='/images/cites/1a.jpg'
                alt="Assassin's photo1"
                width={250}
                height={140}
              />
            </div>

            <div className={`${styles.photo} ${styles.photoP2}`}>
              <Image
                src='/images/cites/2a.jpg'
                alt="Assassin's photo2"
                width={250}
                height={140}
              />
            </div>

            <div className={`${styles.photo} ${styles.photoP3}`}>
              <Image
                src='/images/cites/3a.jpg'
                alt="Assassin's photo3"
                width={250}
                height={140}
              />
            </div>

            <div className={`${styles.photo} ${styles.photoP4}`}>
              <Image
                src='/images/cites/4a.jpg'
                alt="Assassin's photo4"
                width={250}
                height={140}
              />
            </div>

            <div className={`${styles.photo} ${styles.photoP5}`}>
              <Image
                src='/images/cites/5a.jpg'
                alt="Assassin's photo5"
                width={250}
                height={140}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
