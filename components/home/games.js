import React from 'react'
import Link from 'next/link'

import GameItem from './game-item'
import styles from './games.module.scss'

const GAME_DATA = [
  {
    id: 'g1',
    title: "Assassin's Creed IV: Black Flag",
    list: {
      month: 1,
      peopel: 30,
      guides: 2,
      gamers: 12500,
    },
    price: 297,
    classNameImg: 'p1'
  },
  {
    id: 'g2',
    title: "Assassin's Creed Origins",
    list: {
      month: 3,
      peopel: 40,
      guides: 4,
      gamers: 32500,
    },
    price: 397,
    classNameImg: 'p2'
  },
  {
    id: 'g3',
    title: "Assassin's Creed Odyssey",
    list: {
      month: 5,
      peopel: 65,
      guides: 5,
      gamers: 56100,
    },
    price: 497,
    classNameImg: 'p3'
  },
]

function Games() {
  return (
    <section className={styles.sectionGames} id='section-games'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Most popular games</h2>
      </div>

      <div className='row'>
        {GAME_DATA.map((game) => (
          <GameItem key={game.id} {...game} />
        ))}
      </div>

      <div className='u-center-text u-margin-top-big'>
        <Link href='/'>
          <a className='btn btn--red'>
            Discover all games
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Games
