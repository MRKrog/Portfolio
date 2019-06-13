import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Hero extends Component {

  render() {
    return (
      <div className='Hero'>
        <div className="Hero-Content">
          <div className="Hero-Titles">
            <div className="Hero-TitleMain">
              <h1>Michael Krog</h1>
            </div>
            <h3>Porfolio</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
