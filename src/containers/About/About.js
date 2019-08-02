import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

class About extends Component {
  constructor(){
    super()
    this.state = {

    }
  }


  render(){


    return (
      <div className="About">
        <Fade left={true} fraction={0.2}>
        <section className="About-Image">
          <img src={require('../../assets/images/AboutMe2.png')} alt="Michael Krog" />
        </section>
        </ Fade>
        <section className="About-Copy">
          <h4>A Little Bit</h4>
          <h2>About Me</h2>
          <h5>Developer | Designer</h5>
          <p>
            Hello! I'm Michael, a designer chap residing in the beautiful city of Bristol.
            I've been creating meaningful experiences designing for about 10 years.
            working on all sorts of projects; from interactice websites through to
            branding and packaging design. I'm always keen to hear about new collaborations and
            interesting projects so feel free to shoot me a message.
          </p>
          <h3>Contact</h3>
        </section>
      </div>
    )
  }
}

About.propTypes = {

}

export default About;
