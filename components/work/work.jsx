import React from 'react'
import styles from './work.module.scss'
import Image from 'next/image'
import portfolio1 from '../../public/images/portfolio-1.jpg'
import about from '../../public/images/about-2.png'
import portfolio2 from '../../public/images/portfolio-2.png'
import portfolio3 from '../../public/images/ourwork.jpg'
function Work() {
    return (
        <div className={styles.workContainer}>
            <h1 className={styles.title}>
                Our Work
            </h1>

            <div className={styles.workWrapper}>
                <div className={styles.left}>
                    <Image src={portfolio1} width="710" />
                    <p className={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className={styles.right}>
                    <Image src={about} width={500}   layout="fixed" objectFit='contain'/>
                    <div className={styles.rightLast}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                        <Image src={portfolio3} width={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work