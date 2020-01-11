import React from 'react'
import {FilmsContext} from '../App'
import Filminfo from "./Filminfo";

import styles from '../css_modules/starwars.module.css'

const Starwars = () => (
  <FilmsContext.Consumer>{
    value => (
      <div className={styles.films}>
        {
          value.loading ? 'loading...' : value.films
            .sort((a, b) => (a.episode_id > b.episode_id) ? 1 : ((b.episode_id > a.episode_id) ? -1 : 0))
            .map((film, i) => {
            return (
              <Filminfo item={film} key={i}/>)
          })

        }
      </div>
    )
  }
  </FilmsContext.Consumer>
);

export default Starwars