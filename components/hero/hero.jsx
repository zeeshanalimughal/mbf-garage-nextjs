import React, { useState, useEffect } from 'react'
import Add from '../addvertisement/add'
import styles from './hero.module.scss'
function Hero({ content }) {

  const [isAddShow, setIsAddShow] = useState(false)
  let timeOut
  useEffect(() => {
    timeOut = setTimeout(() => {
      setIsAddShow(true)
    }, 3000)
  }, [])

  const toggleAdd = () => {
    setIsAddShow(!isAddShow)
    clearTimeout(timeOut)
  }


  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        {isAddShow && <Add dialog={toggleAdd} />}
        <h2 className={styles.headingSmall}>{content.smallTitle}</h2>
        <h1 className={styles.headingLarge}>{content.largeTitle}</h1>
        <p className={styles.description}>{content.text}</p>
        <button className={styles.button}>Get a Quote</button>
      </div>
    </div>
  )
}

export default Hero