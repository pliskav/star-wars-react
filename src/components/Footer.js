import React from 'react'
import styles from '../css_modules/footer.module.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className={styles.footer_button}>
          <p>Send<span className={styles.button_bold}>email</span></p>
        </div>
    </div>
  )
}

export  default Footer