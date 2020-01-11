import React from 'react';
import {periodWeek} from "../constants/Const";
import styles from '../css_modules/about.module.css'

class About extends React.Component {
  state = {
    luke: {}
  }

  componentDidMount() {
    let hero = JSON.parse(localStorage.getItem('hero'))
    if (hero === null || (Date.now() - hero.time > periodWeek)) {
      fetch(`https://swapi.co/api/people/1/`)
        .then(response => response.json())
        .then(data => {
          let luke = data
          hero = {
            luke: luke,
            time: Date.now()
          }
          this.setState({luke: hero.luke})
          localStorage.setItem('hero', JSON.stringify(hero))
        })
        .catch((err) => console.log(err));
    } else {
      this.setState({luke: hero.luke})
    }

  }

  render() {
    return (
      <div className='container'>
        <div className={styles.about_section}>
          <div className={styles.about_photo}>
            <img src='../img/main.jpg' alt='Luke Skywalker'/>
          </div>
          <div className={styles.info_block}>
            <div className={styles.about_row}>
              <div className={styles.about_subdiv}><p>My name: </p></div>
              <div className={styles.about_info}>{this.state.luke.name}</div>
            </div>
            <div className={styles.about_row}>
              <div className={styles.about_subdiv}><p>My height: </p></div>
              <div className={styles.about_info}>{this.state.luke.height}</div>
            </div>
            <div className={styles.about_row}>
              <div className={styles.about_subdiv}><p>My mass: </p></div>
              <div className={styles.about_info}>{this.state.luke.mass}</div>
            </div>
            <div className={styles.about_row}>
              <div className={styles.about_subdiv}><p>My hair: </p></div>
              <div className={styles.about_info}>{this.state.luke.hair_color}</div>
            </div>
            <div className={styles.about_row}>
              <div className={styles.about_subdiv}><p>My eyes: </p></div>
              <div className={styles.about_info}>{this.state.luke.eye_color}</div>
            </div>
            <div className={styles.about_row}>
              <div className={styles.about_subdiv}><p>My birth date: </p></div>
              <div className={styles.about_info}>{this.state.luke.birth_year}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default About

