import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

import barIcon from'../../assets/icons/bars-light.svg';

const styles = {
  paper: {
    background: '#231f20'
  }
};


class Menu extends Component {
  state = {
    left: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className='Menu'>
        <Button className='MenuBtn' onClick={this.toggleDrawer('left', true)}>
           <span className="bar"></span>
           <span className="bar"></span>
           <span className="bar"></span>
        </Button>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor='left'
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div className='Menu-Content'>
            <h3>Menu</h3>
          </div>
        </Drawer>
      </div>
    );
  }
}


Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
