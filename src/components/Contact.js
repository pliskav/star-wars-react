import React from 'react'
//import {periodDay} from "../constants/Const";

import styles from '../css_modules/contact.module.css'

class Contact extends React.Component {
  state = {
    planets: []
  }

  componentDidMount() {
    // let planets = JSON.parse(localStorage.getItem('planets'))
    // if (planets === null || (Date.now() - planets.time > periodDay)) {
    //   fetch('https://swapi.co/api/planets')
    //     .then(res => res.json())
    //     .then(data => {
    //       let countPlanets = data.count
    //       let countPage = countPlanets % 10 === 0 ? Math.trunc(countPlanets / 10) : Math.trunc(countPlanets / 10) + 1
    //       let names = this.state.planets
    //       for (let i = 1; i <= countPage; i++) {
    //         fetch(`https://swapi.co/api/planets/?page=${i}`)
    //           .then(response => response.json())
    //           .then(res => res.results)
    //           .then(datas => datas.map(data => data.name))
    //         // eslint-disable-next-line
    //         .then(planetNames => {
    //             planetNames.forEach(name => names.push(name))
    //             this.setState({
    //               planets: names
    //             })
    //             console.log(names)
    //             console.log(this.state.planets)
    //             planets = {
    //               planetsList: names,
    //               time: Date.now()
    //             }
    //             localStorage.setItem('planets', JSON.stringify(planets))
    //           })
    //       }
    //     })
    //     .catch((err) => console.log(err))
    // } else {
    //   this.setState({planets: planets.planetsList})
    // }
    fetch('https://swapi.co/api/planets')
      .then(res=>res.json())
      .then(data=>{
        let countPlanets = data.count
        let countPage = countPlanets%10===0 ? Math.trunc(countPlanets/10) : Math.trunc(countPlanets/10) + 1
        for (let i = 1; i <= countPage; i++) {
          fetch(`https://swapi.co/api/planets/?page=${i}`)
            .then(response => response.json())
            .then(res => res.results)
            .then(planets => planets.map(planet => planet.name))
            .then(planetNames => {
              let names = this.state.planets
              planetNames.forEach(name => names.push(name))
              this.setState({
                planets: names
              })
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err)=> console.log(err))
  }


  render() {
    return (
      <form className={styles.form_container} onSubmit={(e) => {
        e.preventDefault()
        console.log("Contact form")
      }}>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label htmlFor="planet">Planet</label>
        <select id="planet" name="planet" placeholder="Your planet..">
          <option value="">Choose you planet</option>
          {
            this.state.planets.sort().map(planet => {
              return (<option value={planet} key={planet}>{planet}</option>)
            })
          }
        </select>
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

        <input type="submit" value="Submit"/>
      </form>
    )
  }

}

export default Contact