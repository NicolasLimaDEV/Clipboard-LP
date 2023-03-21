import React from 'react'

import styles from './section-two.module.css'

import imgDevices from '../../images/image-devices.png'

const SectionTwo = ()=> {
  return(
    <section>
      <div className={styles.container}>
        <h3>Access Clipboard anywhere</h3>
        <p>
          Wheather you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
        </p>

        <img src={imgDevices} alt="Imagem dispositivos" />

      </div>
    </section>
  )
}

export default SectionTwo