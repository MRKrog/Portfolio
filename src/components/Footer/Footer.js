import React from 'react';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="Footer-Contact">
        <i className="fas fa-file"></i>
        <a className="navigation-title" target="_blank" href="/MichaelKrog_Resume.pdf" rel="noopener noreferrer">
          Resume
        </a>
      </div>
      <div className="Footer-Contact">
        <i className="fas fa-phone"></i>
        <a className="navigation-title" href="tel:1-630-715-4311">
          (630) 715-4311
        </a>
      </div>
      <div className="Footer-Contact">
        <i className="far fa-envelope"></i>
        <a className="navigation-title" target="_blank" href="mailto:michaelryankrog@gmail.com" rel="noopener noreferrer">
          MichaelRyanKrog@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Footer;
