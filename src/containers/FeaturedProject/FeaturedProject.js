import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TiltPhaseSix from '../TiltPhaseSix/TiltPhaseSix'

const options = {
  max: 20,
  perspective: 1000,
  scale: 1,
}

class FeaturedProject extends Component {

  render() {
    const { copy, projectImage, title, deviceImage, type, gitHub, builtWith } = this.props;

    let tools = builtWith.map(tool => {
      return (
        <div className="builtRow" key={tool}>
          <img src={require(`../../assets/icons/tools/${tool}.png`)} alt={tool} />
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
              <div className="projectHeader">
                <h4>{type}</h4>
                <h2>{title}</h2>
              </div>
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
              <a href={gitHub} className="Project-Link" target="_blank" rel="noopener noreferrer">
                View Project <img src={require('../../assets/icons/arrow.svg')} alt="View Project" />
              </a>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

FeaturedProject.propTypes = {
  gitHub: PropTypes.string,
}

export default FeaturedProject
