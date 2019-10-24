import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){

    return (
      <div className="About">
        <section className="About-Image">
          <img src={require('../../assets/images/AboutMe2.png')} alt="Michael Krog" />
        </section>
        <section className="About-Copy">
          <div className="About-Pre">
            <div>
              <h4>A Little Bit</h4>
              <h2>About Me</h2>
            </div>
            <h5>Software Developer | Graphic Designer | Digital Marketer | Entrepreneur</h5>
          </div>
          <p>
            Hello! I'm Michael, a Software Developer residing in the beautiful city of Chicago. 
            Over the last 6 years I have been creating engaging
            websites and digital assets. In 2018, I attended Turing
            School of Software & Design obtaining a certificate as
            a Frontend Engineer. Today, I am combining my
            experience, passion and technical skills to create
            customer centric applications with a focus on pixel
            perfect composition. I am currently looking for
            opportunities to join a team and contribute as a
            Full Stack Developer.
          </p>
        </section>
      </div>
    )
  }
}

About.propTypes = {

}

export default About;
