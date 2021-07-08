import React from 'react'
import Link from 'next/link'

import StoryItem from './story-item'
import styles from './stories.module.scss'

const STORY_DATA = [
  {
    id: 's1',
    imgUrl: '/images/user-1.JPG',
    name: 'Kim So-eun',
    title: 'I had the best week never with my family',
    des: 'I\'m glad that Assassin\'s Creed, it\'s now RPG, which means I can fully dissolve in the game, the world, the character and play their role. Assassin\'sfan,Most complete game ever made. Epic in scale. Wonderfully detailed. So many mechanics, so easy to use. This is a masterpiece. I wish you the best.'
  },
  {
    id: 's2',
    imgUrl: '/images/user-2.JPG',
    name: 'Song Joong-ki',
    title: 'Wow! My life is completely different now',
    des: 'This game is Amazing. I haven\'t been this absorbed into a game in years. I am playing on Hard difficulty and have never once felt underleveled.I\'m glad that Assassin\'s Creed, it\'s now RPG, which means I can fully dissolve in the game, the world, the character and play their role. Assassin\'s fan I love you!'
  },
]

function Stories() {
  return (
    <section className={styles.sectionStoreis}>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>We make gamers genuinely happy</h2>
      </div>

      <div className={styles.sectionStoreisBg}>
        {STORY_DATA.map(story => (
          <StoryItem key={story.id} {...story} />
        ))}
      </div>

      <div className='u-center-text u-margin-top-big'>
        <Link href='/'>
          <a className='btn-text'>
            Read all stories &rarr;
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Stories
