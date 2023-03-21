import React from 'react'
import styles from './section-three.module.css'

//Import images
import list from '../../images/icon-blacklist.svg'
import text from '../../images/icon-text.svg'
import eye from '../../images/icon-preview.svg'
import iconGoogle from '../../images/logo-google.png'
import iconIbm from '../../images/logo-ibm.png'
import iconMicrosoft from '../../images/logo-microsoft.png'
import iconHp from '../../images/logo-hp.png'
import iconVector from '../../images/logo-vector-graphics.png'


const SectionThree = ()=> {
  return(
    <section>
      <div className={styles.container}>
        <h1>Supercharge your workflow</h1>
        <p>We've got the tools to boost you productivity.</p>

        <div className={styles.content__cards}>
          <div className={styles.card}>
            <img src={list} alt="" />
            <h3>Create blacklists</h3>
            <p>Ensure sensitive information never makes its way to your clipboard by excluding certain soucers</p>
          </div>
          <div className={styles.card}>
            <img src={text} alt="" />
            <h3>Plain text snippets</h3>
            <p>Remove unwanted formatting from copied text for a consistent look</p>
          </div>
          <div className={styles.card}>
            <img src={eye} alt="" />
            <h3>Sneak preview</h3>
            <p>Quick preview of all snippets on your Clipboard for easy access.</p>
          </div>
        </div>

        <div className={styles.companys}>
          <img src={iconGoogle} alt="" />
          <img src={iconIbm} alt="" />
          <img src={iconMicrosoft} alt="" />
          <img src={iconHp} alt="" />
          <img src={iconVector} alt="" />
        </div>
      </div>
    </section>
  )
}

export default SectionThree