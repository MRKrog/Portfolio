import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TiltPhaseSix from '../TiltPhaseSix/TiltPhaseSix'

const options = {
  max: 20,
  perspective: 1000,
  scale: 1,
}

const optionsBack = {
  max: 10,
  perspective: 10000,
  scale: 1.001,
}

class FeaturedProject extends Component {

  render() {
    const { copy, projectImage, title, id, deviceImage, type, gitHub, builtWith } = this.props;

    let tools = builtWith.map(tool => {
      return (
        <div className="builtRow">
          <img src={require(`../../assets/icons/tools/${tool}.png`)} />
          <h5>{tool}</h5>
        </div>
      )
    })

    return (
      <div className='FeaturedProject'>
        <div className="Featured-Background">
          <div className="Featured-Content">
          <section className="projectDetails">
            <div className="builtContainer">
              <div className="builtTitle">
                <h4>Built With</h4>
              </div>
              <div className="builtTools">
                {tools}
              </div>
            </div>
          </section>
            <section className="projectCopy">
              <h4>{type}</h4>
              <h2>{title}</h2>
              <p>{copy}</p>
            </section>
            <section className="projectImage">
              <div style={{
                      background: `url(${require(`../../assets/images/${projectImage}.jpg`)}) no-repeat center`,
                      backgroundSize: 'cover',
                      height: 325,
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
              </div>
              <a href={gitHub} className="Project-Link" target="_blank">
                View Project <img src={require('../../assets/icons/arrow.svg')} />
              </a>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedProject
