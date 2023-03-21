import styles from './main.module.css'
import Logo from '../../images/logo.svg'

//Import Btn's
import BtnIos from '../BtnIOS'
import BtnMac from '../BtnMac'

const Main = ()=> {
  return(
    <main>
      <div className={styles.container}>
        <img src={Logo} alt="Logo clipboard" />
          <h3>A history of everything you copy</h3>
            <p>
              Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all you devices.
            </p>

            <div className={styles.content_buttons}>
              <BtnIos />
              <BtnMac />
            </div>
      </div>
    </main>
  )
}

export default Main