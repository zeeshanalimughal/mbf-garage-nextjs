import Image from 'next/image'
import React from 'react'
import styles from './add.module.scss'
import person from '../../public/images/person.png'
import {
    FaTimes,
} from "react-icons/fa";
function Add({ dialog }) {

    return (
        <div className={styles.addContainer}>
            <div className={styles.closeIcon} onClick={() => dialog()}>
                <FaTimes />
            </div>
            <div className={styles.leftContent}>
                <h1 className={styles.heading}>
                    For Every<br />
                    <span>Oil Service</span> Get<br />
                    Free <span>ENGINE FLUSH<br />
                        & COMPUTER<br />DIAGNOSTICS</span>
                </h1>
                <p className={styles.validText}>
                    Offer Valid till 20th September 2022
                </p>
                <button className={styles.btnQuote}>
                    Get a Quote
                </button>
            </div>
            <div className={styles.rightImage}>
                <div className={styles.imageContainer}>
                    <Image src={person} />
                </div>
            </div>
        </div>
    )
}

export default Add  
