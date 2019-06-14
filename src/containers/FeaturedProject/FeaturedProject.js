import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TiltPhaseSix from '../TiltPhaseSix/TiltPhaseSix'

const options = {
  max: 10,
  perspective: 2000,
  scale: 1.03,
}

const optionsBack = {
  max: 1,
  perspective: 10000,
  scale: 1.005,
}

class FeaturedProject extends Component {

  render() {
    const { copy, projectImage, title, id, deviceImage } = this.props;

    let dogBackground = `../../assets/images/${projectImage}.jpg`;
    let dogForeground = `../../assets/images/deviceImg/${deviceImage}.png`

    return (
      <div className='FeaturedProject'>
        <div className="Featured-Background">
          <div className="Featured-Content">
            <section className="projectIcon">
              Icon
            </section>
            <section className="projectCopy">
              <h4>Featured</h4>
              <h2>{title}</h2>
              <p>{copy}</p>
            </section>
            <section className="projectImage">
              <TiltPhaseSix options={optionsBack}
                            style={{
                              background: `url(${require(`../../assets/images/${projectImage}.jpg`)}) no-repeat center`,
                              backgroundSize: 'cover',
                              height: 275,
                              width: '100%',
                            }}>
                <TiltPhaseSix options={options}
                              style={{
                                height: "100%"
                              }}>
                  <div className="imgContainer">
                    <img className="imageDevice" src={require(`../../assets/images/deviceImg/${deviceImage}.png`)} alt="" />
                  </div>
                </TiltPhaseSix>
              </TiltPhaseSix>
              <Link className="Project-Link" to={`/project/${id}`}>
                View Project <img src={require('../../assets/icons/arrow.svg')} />
              </Link>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedProject
