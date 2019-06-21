import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { sideBarDisplay } from '../../thunks/sideBarDisplay';


export class SideBar extends Component {

  toggleMenu = () => {
    const { menu, sideBarDisplay } = this.props;
    if(!menu){
      sideBarDisplay(true);
    } else {
      sideBarDisplay(false);
    }
  }

  render() {
    const { menu } = this.props

    let menuStyle;
    if(!menu) {
      menuStyle = "SideBar status-false";
    } else {
      menuStyle = "SideBar status-true";
    }

    return (
      <div className={menuStyle}>

        <section className="SideBar-Navigation">
          <section className="pageLinksContainer">
            <div className="navigation-row">
              <img src={require('../../assets/icons/file-user-solid.svg')} alt="View Resume" />
              <a className="navigation-title" target="_blank" href="/MichaelKrog_Resume.pdf" rel="noopener noreferrer" onClick={this.toggleMenu}>
                Resume
              </a>
            </div>
            <div className="navigation-row">
              <img src={require('../../assets/icons/github.svg')} alt="View Resume" />
              <a className="navigation-title" target="_blank" href="https://github.com/MRKrog" rel="noopener noreferrer" onClick={this.toggleMenu}>
                Github Repository
              </a>
            </div>
            <div className="navigation-row">
              <img src={require('../../assets/icons/linkedin.svg')} alt="View Resume" />
              <a className="navigation-title" target="_blank" href="https://www.linkedin.com/in/michaelkrog/" rel="noopener noreferrer" onClick={this.toggleMenu}>
                Linkedin Profile
              </a>
            </div>
          </section>
          <section className="webLinksContainer">
            <a href="mailto:michaelryankrog@gmail.com" target="_blank" className="webLink" rel="noopener noreferrer">
              <img src={require('../../assets/icons/email.svg')} alt="View Resume" />
            </a>
            <a href="tel:1-630-715-4311" className="webLink" rel="noopener noreferrer">
              <img src={require('../../assets/icons/phone.svg')} alt="Call" />
            </a>
          </section>
        </section>

        <section className="SideBar-sideDisplay" onClick={this.toggleMenu}>
          <section className="SideBar-Icon">
            <div className="hamburger__button">
              <span className="hamburger__icon"></span>
            </div>
          </section>
          <div className='SideBar-Title'>
            <h4>Menu</h4>
          </div>
        </section>

      </div>
    )
  }
}

export const mapStateToProps = state => ({
  menu: state.menu,
  loading: state.loading,
  featuredProjects: state.featuredProjects
});

export const mapDispatchToProps = dispatch => ({
  sideBarDisplay: data => dispatch(sideBarDisplay(data)),
  setFeatured: data => dispatch(actions.setFeatured(data)),
  setLoading: data => dispatch(actions.setLoading(data)),
  setError: data => dispatch(actions.setError(data)),
});

SideBar.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
