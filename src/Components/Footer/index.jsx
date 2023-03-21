import styles from './footer.module.css'
import React from 'react'

import logo from '../../images/logo.svg'
import iconFacebook from '../../images/icon-facebook.svg'
import iconTwitter from '../../images/icon-twitter.svg'
import iconInstagram from '../../images/icon-instagram.svg'

const Footer = ()=>{
  return(
    <footer>
      <div className={styles.content__a}>
        <img className={styles.logo} src={logo} alt="" />
      </div>

      <div className={styles.content__b}>
        <nav className={styles.menu}>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Press Kit</a>
          <a href="#">Install Guide</a>
        </nav>
      </div>

      <div className={styles.content__c}>
        <img src={iconFacebook} alt="" />
        <img src={iconTwitter} alt="" />
        <img src={iconInstagram} alt="" />
      </div>
    </footer>
  )
}

export default Footer