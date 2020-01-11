import React from 'react'
import styles from '../css_modules/dreamteam.module.css'

class Hero extends React.Component {
  clickHandler = (props) => {
    this.props.action(this.props.name)
  }
  render() {
    return (
      <div onClick={this.clickHandler}>
        <img className={styles.teamphoto}
             src={this.props.src} alt=""/>
      </div>
    )
  }
};

export default Hero

