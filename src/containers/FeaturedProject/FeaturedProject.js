import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class FeaturedProject extends Component {

  render() {
    const { copy, projectImage, title } = this.props;

    // <Link to="/InTheater" style={theater} className="theater-box">Movies in theater</Link>

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
              <a href="#">
                View Work <img src={require('../../assets/icons/arrow.svg')} />
              </a>
            </section>
            <section className="projectImage">
              <div className="imageBg" style={{backgroundImage: `url(${require(`../../assets/images/${projectImage}.jpg`)})`}}></div>
            </section>
          </div>
        </div>
        <a className="Project-Link" href="#">+</a>
      </div>
    )
  }
}

export default FeaturedProject
