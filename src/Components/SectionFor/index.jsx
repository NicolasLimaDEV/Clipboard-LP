import React from 'react'
import styles from './section-for.module.css'

import BtnIOS from '../BtnIOS'
import BtnMac from '../BtnMac'

const SectionFor = ()=> {
  return(
    <section className={styles.section__for}>
      <h1>Clipboard for iOS and Mac OS</h1>
      <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.</p>

      <div className={styles.container}>
        <BtnIOS />
        <BtnMac />
      </div>
    </section>
  )
}

export default SectionFor