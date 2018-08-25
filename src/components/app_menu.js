import React, { Component } from 'react';
import logo from '../reactSquare.svg'
import { Menu } from 'semantic-ui-react';

class AppMenu extends Component {

  render() {
    return (

      <Menu fluid borderless>
        <Menu.Menu className="navbar-brand-container">
          <Menu.Item className="navbar-brand">
            ReactTar<img src={logo} className="logo" />t
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right" className="menuButtons">
          <Menu.Item
              onClick={this.props.handleNewCard}
              disabled={this.props.disabled}
          >
            <div>Next Card</div>
          </Menu.Item>
          <Menu.Item
              onClick={this.props.handleNewReading}
          >
            <div className="newReading" >New Reading</div>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }

}


export default AppMenu;
