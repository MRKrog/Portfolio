import React from 'react';

const Footer = () => {
  return (
    <div className='Footer'>

      <div className="Footer-Contact">
        <img src={require('../../assets/icons/phone.svg')} alt="Call" />
        <a className="navigation-title" href="tel:1-630-715-4311">
          (630) 715-4311
        </a>
      </div>
      <div className="Footer-Contact">
        <img src={require('../../assets/icons/email.svg')} alt="Send Email" />
        <a className="navigation-title" target="_blank" href="mailto:michaelryankrog@gmail.com" rel="noopener noreferrer">
          MichaelRyanKrog@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Footer;
