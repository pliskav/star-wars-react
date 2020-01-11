import React from 'react'
import styles from '../css_modules/error.module.css'

const Page404 = () => {
  return (
    <div className='container'>
      <div className={styles.error_wrapper}>
        <h1>Error 404</h1>
        <p>Wrong page or page have been deleted</p>
      </div>
    </div>
  )
}

export default Page404