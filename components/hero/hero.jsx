import React from 'react'
import styles from './hero.module.scss'
function Hero({ content }) {
  console.log(content)
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h2 className={styles.headingSmall}>{content.smallTitle}</h2>
        <h1 className={styles.headingLarge}>{content.largeTitle}</h1>
        <p className={styles.description}>{content.text}</p>
        <button className={styles.button}>Get a Quote</button>
      </div>
    </div>
  )
}

export default Hero