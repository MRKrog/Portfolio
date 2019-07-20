import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import * as actions from '../../actions';

import SideBar from '../SideBar/SideBar';
import About from '../About/About';
import FeaturedContainer from '../FeaturedContainer/FeaturedContainer';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

import { allProjects } from '../../projectData/projects.js';
import { sideBarDisplay } from '../../thunks/sideBarDisplay';

export class App extends Component {

  componentDidMount() {
    this.props.setLoading(true);
    this.props.setFeatured(allProjects)
    this.props.setProjects(allProjects)
    this.props.setLoading(false);
  }

  render() {
    const { menu, sideBarDisplay } = this.props;

    let backDropStyle;
    if(!menu){
      backDropStyle = "SideBar-Backdrop-hidden";
    } else {
      backDropStyle = "SideBar-Backdrop-visible";
    }

    return (
      <div className='App'>
        <SideBar />
        <Switch>
          {
            this.props.featuredProjects.length > 0 &&
            <Route exact path="/" component={FeaturedContainer} />
          }
          {
            this.props.allProjects.length > 0 &&
            <Route exact path="/project/:id" render={({match}) => {
              const { id } = match.params;
              const foundProject = this.props.allProjects.find(project => parseInt(id) === project.id)
              this.props.setCurrentProject(foundProject)
              return (
                <ProjectContainer {...foundProject}/>
              )
            }} />
          }
        </Switch>
        <About />
        <section className={backDropStyle} onClick={() => sideBarDisplay(false)}></section>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  menu: state.menu,
  loading: state.loading,
  featuredProjects: state.featuredProjects,
  allProjects: state.allProjects,
});

export const mapDispatchToProps = dispatch => ({
  setCurrentProject: data => dispatch(actions.setCurrentProject(data)),
  setProjects: data => dispatch(actions.setProjects(data)),
  setFeatured: data => dispatch(actions.setFeatured(data)),
  sideBarDisplay: data => dispatch(sideBarDisplay(data)),
  setLoading: data => dispatch(actions.setLoading(data)),
  setError: data => dispatch(actions.setError(data)),
});

App.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
