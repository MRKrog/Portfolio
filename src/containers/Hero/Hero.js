import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Parallax } from 'react-scroll-parallax';


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
    <Parallax className="custom-class" y={[-5, 10]} tagOuter="div">
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
    </Parallax>
    )
  }
}

Hero.propTypes = {
  mainImage: PropTypes.string,
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
}

export default Hero
