import React from 'react'
import { NavLink } from 'react-router-dom'
import {aboutPath, contactPath, rootPath, starwarsPath} from "../constants/Const";
import styles from '../css_modules/nav.module.css'
class Nav extends React.Component{
  state={
    isMenuOpen: false
  }
  handlerMenuButtonClick = () =>{
    let bool = this.state.isMenuOpen
    this.setState({
      isMenuOpen: !bool
    })
  }
  render(){
    return(
      <div className={styles.menu_container}>
        <div className={styles.menu_button} onClick={this.handlerMenuButtonClick}>
          <i className="fa fa-bars"></i>
        </div>
        <div className={styles.nav}>
          <ul className={this.state.isMenuOpen ? styles.show : styles.nav}>
            <li><NavLink to={rootPath} exact activeClassName={styles.activelink}>Home</NavLink></li>
            <li><NavLink to={aboutPath} activeClassName={styles.activelink}>About</NavLink></li>
            <li><NavLink to={starwarsPath} activeClassName={styles.activelink}>StarWars</NavLink></li>
            <li><NavLink to={contactPath} activeClassName={styles.activelink}>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Nav;