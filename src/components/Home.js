import React from 'react'
import {FilmsContext} from '../App'
import styles from '../css_modules/main.module.css'

const getText = (data) => {
  return data[Math.floor(Math.random() * data.length)].opening_crawl
};

const Home = () => (
  <FilmsContext.Consumer>{
    value => (
      <div className={styles.home}>
        <div className={styles.mainphoto}>
          <img src='../img/main.jpg' alt='Luke Skywalker'/>
        </div>
        <div className={styles.maintext}>
          <p className={styles.farGalaxy}>
            {
              value.loading ? 'loading...' : getText(value.films)
            }
          </p>
        </div>
      </div>
    )
  }
  </FilmsContext.Consumer>
);

export default Home