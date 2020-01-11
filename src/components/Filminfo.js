import React from 'react'
import styles from '../css_modules/starwars.module.css'


class Filminfo extends React.Component {
  state = {
    clicked: false
  }

  toggleClick = () => {
    const bool = this.state.clicked
    this.setState({
      clicked: !bool
    })
  }

  normalView = () => {
    return (
      <div className={styles.info_container}>
        <div className={styles.film_info}>
          <div className={styles.film_title} onClick={this.toggleClick}>{this.props.item.title}</div>
          <div className={styles.film_date}>{this.props.item.release_date}</div>
          <div className={styles.film_director}>{this.props.item.director}</div>
        </div>
      </div>
    )
  }

  deteiledView = () => {
    return (
      <div className={styles.info_container}>
        <div className={styles.film_info}>
          <div className={styles.close_button}>
            <div className={styles.x} onClick={this.toggleClick}></div>
          </div>
          <div className={styles.film_crawl}>
            {this.props.item.opening_crawl}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return this.state.clicked ? this.deteiledView() : this.normalView()
  }

}

export default Filminfo