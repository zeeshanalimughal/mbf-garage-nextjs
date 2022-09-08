import React from 'react'
import offer1 from '../../public/images/image3.png'
import offer2 from '../../public/images/image2.png'
import offer3 from '../../public/images/image1.png'
import styles from './offers.module.scss'
import Image from 'next/image'
const OffersData = [
    {
        image: offer1,
        type: 'Basic',
        power: '3500p',
        aType: '3a',
        mType: "M2"
    },
    {
        image: offer2,
        type: 'Major',
        power: '2200p',
        aType: '3a',
        mType: "M2"
    },
    {
        image: offer3,
        type: 'Full Services',
        power: '3800p',
        aType: '3a',
        mType: "M2"
    },
]
function Offers() {
    return (
        <div className={styles.offersContainer}>
            <h1 className={styles.title}>
                Offers
            </h1>
            <div className={styles.offers}>
                {OffersData.map((offer, key) => (

                    <div key={key} className={styles.offer}>
                        <div className={styles.offerImage}>
                            <Image src={offer.image} width="400" height="200" objectFit='cover' />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.offerType}>
                                {offer.type}
                            </h2>
                            <div className={styles.details}>
                                <span className={styles.offerPower}>
                                    {offer.power}
                                </span>
                                <span>
                                    {offer.aType}
                                </span>
                                <span>
                                    {offer.mType}
                                </span>
                            </div>
                            <button className={styles.btnContinue}>Continue</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Offers   