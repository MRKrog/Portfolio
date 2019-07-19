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
          <img src="" alt="Michael Krog" />
        </section>
        <section className="About-Copy">
          <h4>A Little Bit</h4>
          <h2>About Me</h2>
          <h5>Design Director At Green Chameleon / Awwwards Jury Member</h5>
          <p>
            Hello! I'm Michael, a designer chap residing in the beautiful city of Bristol.
            I've been creating meaningful experiences designing for about 10 years.
            working on all sorts of projects; from interactice websites through to
            branding and packaging design. I'm always keen to hear about new collaborations and
            interesting projects so feel free to shoot me a message.
          </p>
          <h3>Features & Awards</h3>
        </section>
      </div>
    )
  }
}

About.propTypes = {

}

export default About;
