import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Hero extends Component {

  render() {
    const { mainImage, mainTitle, subTitle } = this.props;

    let heroStyle;
    if(!this.props.projectType){
      heroStyle = "Hero-Content";
    } else {
      heroStyle = "Hero-Content Hero-Texture";
    }

    return (
      <div className='Hero' style={{backgroundImage: `url(${require(`../../assets/images/${mainImage}.jpg`)})`}}>
        <div className={heroStyle}>
          <div className="Hero-Titles">
            <div className="Hero-TitleMain">
              <h1>{mainTitle}</h1>
            </div>
            <h3>{subTitle}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
