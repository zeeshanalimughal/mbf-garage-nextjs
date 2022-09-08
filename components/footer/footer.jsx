import React from 'react'
import styles from './footer.module.scss'
import generalData from '../../data/json/general.json'
import quickLinks from '../../data/json/quicklinks.json'
import Link from 'next/link'
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagramSquare,
    FaYoutube,
    FaTelegramPlane

} from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <div className={styles.contactInfo}>
                    <h2 className={styles.title}>
                        Contact Info/<br />Address
                    </h2>

                    <p className={styles.addres}>
                        {generalData.addressOne}<br />{generalData.addressTwo}<br />
                        {generalData.phone}
                    </p>
                    <div className={styles.social}>
                        <Link href={`mailto:${generalData.email}`}>{generalData.email}</Link>
                        <div className={styles.icons}>
                            <Link href="#"><a><FaFacebookF /></a></Link>
                            <Link href="#"><a><FaTwitter /></a></Link>
                            <Link href="#"><a><FaPinterest /></a></Link>
                            <Link href="#"><a><FaInstagramSquare /></a></Link>
                            <Link href="#"><a><FaYoutube /></a></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.quickLinks}>
                    <h2 className={styles.title}>
                        Quick<br />Links
                    </h2>
                    <ul className={styles.quickLinksList}>
                        {quickLinks.map(link => (

                            <li key={link.id}>
                                <Link href={link.path}>{link.name}</Link>
                            </li>

                        ))}
                    </ul>

                </div>
                <div className={styles.newsLetter}>
                    <h2 className={styles.title}>
                        Join our<br />Newsletter
                    </h2>
                    <p className={styles.description}>
                        Get news, updates and <br />exclusive offer up to 20%<br /> discount.
                    </p>
                    <form>
                        <div className={styles.inputBox}>
                            <input type="text" placeholder='Enter your email address' />
                            <button type="submit" className={styles.sendBtn}><FaTelegramPlane className={styles.icon} /></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <label className={styles.company}>{generalData.companyName}</label>
                <label className={styles.company}>Designed By <span>{generalData.designedBy}</span></label>
            </div>
        </div>
    )
}

export default Footer