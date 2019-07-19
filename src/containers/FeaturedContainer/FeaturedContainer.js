import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import PropTypes from "prop-types";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import Hero from "../Hero/Hero";

import { ParallaxProvider } from 'react-scroll-parallax';

export class FeaturedContainer extends Component {
  constructor() {
    super()
    this.state = {
      mainImage: "hero",
      mainTitle: "Michael Krog",
      subTitle: "Portfolio",
    }
  }

  render() {
    const { allProjects } = this.props

    let allFeaturedProjects = allProjects.map(project => {
      return <FeaturedProject {...project} key={project.title} />
    });

    return (
      <div className="container">
        <ParallaxProvider>
        <Hero {...this.state} />
        </ParallaxProvider>
        <div className="FeaturedContainer">
          { allFeaturedProjects }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  featuredProjects: state.featuredProjects,
  allProjects: state.allProjects,
});

export const mapDispatchToProps = dispatch => ({
  setFeatured: data => dispatch(actions.setFeatured(data)),
  setLoading: data => dispatch(actions.setLoading(data)),
  setError: data => dispatch(actions.setError(data)),
});

FeaturedContainer.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedContainer);
