import React from "react";
import styles from "../css_modules/dreamteam.module.css";

class Herodetails extends React.Component {
  onClickHandler = () => {
    this.props.closeAction();
  };

  peopleView = () => {
    return (
      <div className={styles.details_block}>
        <h3 className={styles.details_name}>{this.props.hero.name}</h3>
        <img src={this.props.src} alt="" />
        <div className={styles.details_subdiv}>My height</div>
        <div className={styles.details_info}>{this.props.hero.height}</div>
        <div className={styles.details_subdiv}>My mass</div>
        <div className={styles.details_info}>{this.props.hero.mass}</div>
        <div className={styles.details_subdiv}>My hair</div>
        <div className={styles.details_info}>{this.props.hero.hair_color}</div>
        <div className={styles.details_subdiv}>My eyes</div>
        <div className={styles.details_info}>{this.props.hero.eye_color}</div>
        <button className={styles.details_button} onClick={this.onClickHandler}>Close</button>
      </div>
    );
  };

  starshipView = () => {
    return (
      <div className={styles.details_block}>
        <h3 className={styles.details_name}>{this.props.hero.model}</h3>
        <img src={this.props.src} alt="" />
        <div className={styles.details_subdiv}>Manufacturer</div>
        <div className={styles.details_info}>{this.props.hero.manufacturer}</div>
        <div className={styles.details_subdiv}>Length</div>
        <div className={styles.details_info}>{this.props.hero.length}</div>
        <div className={styles.details_subdiv}>Cargo capacity</div>
        <div className={styles.details_info}>{this.props.hero.cargo_capacity}</div>
        <div className={styles.details_subdiv}>Maximal atmosphering speed</div>
        <div className={styles.details_info}>{this.props.hero.max_atmosphering_speed}</div>
        <div className={styles.details_subdiv}>Starship class</div>
        <div className={styles.details_info}>{this.props.hero.starship_class}</div>
        <button className={styles.details_button} onClick={this.onClickHandler}>Close</button>
      </div>
    );
  };

  render() {
    return (
      <div className={styles.details_container}>
        {this.props.hero.name === "Millennium Falcon"
            ? this.starshipView()
            : this.peopleView()}
      </div>
    );
  }
}

export default Herodetails;
