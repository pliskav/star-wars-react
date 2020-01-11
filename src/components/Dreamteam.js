import React from 'react'
import Hero from './Hero'
import Herodetails from './Herodetails'

import styles from '../css_modules/dreamteam.module.css'

class Dreamteam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          url: "./img/friend1.jpg",
          type: 'people',
          name: 'R2-D2'
        },
        {
          url: "./img/friend2.jpg",
          type: 'people',
          name: 'C-3PO'
        },
        {
          url: "./img/friend3.jpg",
          type: 'people',
          name: 'Wicket Systri Warrick'
        },
        {
          url: "./img/friend4.jpg",
          type: 'people',
          name: 'Chewbacca'
        },
        {
          url: "./img/friend5.jpg",
          type: 'people',
          name: 'Han Solo'
        },
        {
          url: "./img/friend6.jpg",
          type: 'people',
          name: 'Leia Organa'
        },
        {
          url: "./img/friend7.jpg",
          type: 'starships',
          name: 'Millennium Falcon'
        },
        {
          url: "./img/friend8.jpg",
          type: 'people',
          name: 'Obi-Wan Kenobi'
        },
        {
          url: "./img/friend9.jpg",
          type: 'people',
          name: 'Yoda'
        }
      ],
      imageClicked: false,
      heroes: [],
      hero: undefined
    }
  }

  findHero = (name) => {
    const tmp = this.state.imageClicked
    const arr = this.state.heroes
    const hero = arr.filter(hero => hero.name === name)
    this.setState({
      imageClicked: !tmp,
      hero: hero[0]
    })
  }

  closeDetails = () => {
    const tmp = this.state.imageClicked
    this.setState({
      imageClicked: !tmp
    })
  }

  componentDidMount() {
    const heroesArray = this.state.characters;
    const tmp = [];
    heroesArray.map(hero => {
      return (
        fetch(`https://swapi.co/api/${hero.type}/?search=${hero.name.toLowerCase()}`)
          .then(response => response.json())
          .then(data => data.results)
          .then(hero => tmp.push(hero[0]))
          .catch((err) => console.log(err))
      )
    });
    this.setState({
      heroes: tmp
    })
  }

  normalView = () => {
    return (
      <div className={styles.teamgallery}>
        <div className={styles.gallery_title}>Dream Team</div>
        <div className={styles.dreamteam}>
          {
            this.state.characters.map((character, i) => {
              return (<Hero
                src={character.url}
                name={character.name}
                type={character.type}
                action={this.findHero}
                key={i}/>)
            })
          }

        </div>
      </div>
    );
  }

  detailedView = () => {
    const heroImg = this.state.characters.filter(character => character.name===this.state.hero.name)
    return (
      <div className={styles.teamgallery}>
        <div className={styles.gallery_title}>Dream Team</div>
        <Herodetails
          hero={this.state.hero}
          src={heroImg[0].url}
          closeAction={this.closeDetails}/>
      </div>
    )
  };


  render() {
    return this.state.imageClicked ? this.detailedView() : this.normalView()
  }
}

export default Dreamteam