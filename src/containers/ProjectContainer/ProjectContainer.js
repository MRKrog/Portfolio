import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';


export class ProjectContainer extends Component {

  render() {
    const { currentProject } = this.props;

    return (
      <div>
        <Hero mainImage={currentProject.projectImage}
              mainTitle={currentProject.title}
              subTitle={currentProject.type}
              projectType={true}
            />
        <div className='ProjectContainer'>
          <h2>Project Container</h2>
          {this.props.title}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  currentProject: state.currentProject,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  setError: data => dispatch(actions.setError(data)),
});

ProjectContainer.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
