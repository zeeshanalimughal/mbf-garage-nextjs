import Image from 'next/image'
import React from 'react'
import styles from './portfolio.module.scss'
import portfolio1 from '../../public/images/portfolio-1.png'
import portfolio2 from '../../public/images/portfolio-2.png'
import portfolio3 from '../../public/images/portfolio-3.png'
import portfolio4 from '../../public/images/portfolio-4.png'
import portfolio5 from '../../public/images/portfolio-5.png'
import portfolio6 from '../../public/images/portfolio-1.jpg'




function Portfolio() {
    return (
        <div className={styles.portfolioContainer}>
            <h1 className={styles.title}>
             Portfolio Images
            </h1>

            <div className={styles.imagesContainer}>
                <Image className={styles.image} src={portfolio1} height={400}/>
                <Image className={styles.image} src={portfolio2} height={400}/>
                <Image className={styles.image} src={portfolio3} height={400}/>
                <Image className={styles.image} src={portfolio4} height={400}/>
                <Image className={styles.image} src={portfolio5} height={400}/>
                <Image className={styles.image} src={portfolio6} height={400}/>
            </div>
        </div>
    )
}

export default Portfolio