import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import * as actions from '../../actions';

import Loading from '../../components/Loading/Loading';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import SideBar from '../SideBar/SideBar';
import FeaturedContainer from '../FeaturedContainer/FeaturedContainer';

import { allProjects } from '../../projectData/projects.js';
import { sideBarDisplay } from '../../thunks/sideBarDisplay';

export class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount() {
    this.props.setLoading(true);
    this.props.setFeatured(allProjects)
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
        <Hero />
        <Switch>
          {
            this.props.featuredProjects.length > 0 &&
            <Route exact path="/" component={FeaturedContainer} />
          }

          <Route exact path="/project/:id" render={({match}) => {
            const { id, title } = match.params
            // const project = this.props.genres.find((genre, index) => index === parseInt(id))
            console.log('id', id);
            return
          }} />
        </Switch>

        <section className={backDropStyle} onClick={() => sideBarDisplay(false)}></section>
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
  setFeatured: data => dispatch(actions.setFeatured(data)),
  sideBarDisplay: data => dispatch(sideBarDisplay(data)),
  setLoading: data => dispatch(actions.setLoading(data)),
  setError: data => dispatch(actions.setError(data)),
});

App.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
