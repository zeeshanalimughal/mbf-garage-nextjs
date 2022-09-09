import React,{ useState} from 'react'
import * as styles from './navbar.module.scss'
import linksData from '../../data/json/links.json'
import generalData from '../../data/json/general.json'
import logo from '../../public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import locationIcon from '../../public/images/icons/Poi.png'
import phoneIcon from '../../public/images/icons/Phone.png'
import newIcon from '../../public/images/icons/New.png'
import { HiOutlineMenuAlt3 , HiOutlineX} from "react-icons/hi";


function Navbar() {

  const [toggle,setToggle] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarTop}>
        <Image
          src={logo}
          width="250"
          height="100"
          objectFit='contain'
        />
        <div className={styles.contactInfo}>
          <div className={styles.info}>
            <Image src={locationIcon} width="28"/>
            <span>
              {generalData.addressOne}
              <br/>
              {generalData.addressTwo}
            </span>
          </div>
          <div className={styles.info}>
            <Image src={phoneIcon} width="28"/>
            <span>
              {generalData.phone}
            </span>
          </div>
          <Link href="contact">
          <button className={styles.contactBtn}>
           Contact us
          </button>
          </Link>
        </div>
    <div className={styles.menu} onClick={()=>setToggle(!toggle)}>
      <HiOutlineMenuAlt3/>
    </div>
      </div>

      <ul className={!toggle ? styles.nav : [styles.nav, styles.active].join(' ')}>
        <div className={styles.menuClose} onClick={()=>setToggle(!toggle)}>
          <HiOutlineX/>
        </div>
        {linksData.map(link => link.active && (
          <li key={link.id} className={styles.navLink}>
            <Link href={link.path} className={styles.navItem}>
              {link.name}
            </Link>
          </li>
        ))}
        <Image className={styles.navNewIcon} src={newIcon} />
      </ul>
    </nav>
  )
}

export default Navbar