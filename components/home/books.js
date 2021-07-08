import React from 'react'
import Link from 'next/link'

import styles from './books.module.scss'

function Books() {
  return (
    <section className={styles.sectionBook}>
      <div className='row'>
        <div className={styles.book}>
          <div className={styles.bookForm}>
            <form action='#' className={styles.form}>
              <div className='u-margin-bottom-middle'>
                <h2 className='heading-secondary'>Start now</h2>
              </div>

              <div className={styles.group}>
                <input
                  type='text'
                  className={styles.input}
                  id='name'
                  placeholder='Full Name'
                  autoComplete='off'
                  required
                />
                <label htmlFor='name' className={styles.label}>
                  Full Name
                </label>
              </div>

              <div className={styles.group}>
                <input
                  type='email'
                  className={styles.input}
                  id='email'
                  placeholder='Email Adrass'
                  autoComplete='off'
                  required
                />
                <label htmlFor='email' className={styles.label}>
                  Email Adrass
                </label>
              </div>

              <div className={styles.group}>
                <div className={styles.radioGroup}>
                  <input
                    type='radio'
                    className={styles.radioInput}
                    id='amateur'
                    name='size'
                    placeholder='Full Email'
                    autoComplete='off'
                    required
                  />
                  <label htmlFor='amateur' className={styles.radioLabel}>
                    <span className={styles.radioBtn}></span>
                    Amateur gamer
                  </label>
                </div>

                <div className={styles.radioGroup}>
                  <input
                    type='radio'
                    className={styles.radioInput}
                    id='professional'
                    name='size'
                    placeholder='Full Email'
                    autoComplete='off'
                    required
                  />
                  <label htmlFor='professional' className={styles.radioLabel}>
                    <span className={styles.radioBtn}></span>
                    Professional gamer
                  </label>
                </div>
              </div>
              <div className={`${styles.group} u-margin-top-middle`}>
                <Link href='/'>
                  <a className='btn btn--red'>
                    Next step &rarr;
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Books
