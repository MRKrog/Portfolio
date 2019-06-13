import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

import Menu from '../Menu/Menu';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

export class Header extends Component {

  render() {
    return (
      <div className='Header'>
        <Menu />
        <div className='Header-Title'>
          <h4>Projects</h4>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  setError: data => dispatch(actions.setError(data)),
});

Header.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
