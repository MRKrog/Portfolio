import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class TabContainer extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue })
  }

  render() {
    return (
      <div>
        <div>
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </div>
        {this.state.value === 0 && <div>Item One</div>}
        {this.state.value === 1 && <div>Item Two</div>}
        {this.state.value === 2 && <div>Item Three</div>}
      </div>
    );
  }
}

export default TabContainer
