import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react'
import logo from '../images/ReactLogo.png'

class AppMenu extends Component {

  handleClick = (e) => {
    e.preventDefault()
    alert('New Card Button clicked!')
  }

  handleDisable = (e) => {
    this.setState({ disabled: true })
  }

  render() {
    return (
      <Menu fluid className="navBar" borderless>
        <Menu.Menu>
          <Menu.Item>
            <div className="appName">ReactTar<img src={logo} className="logo" />t</div>
          </Menu.Item>
        </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item onClick={this.props.handleSubmit} disabled={this.props.disabled}>
              <div className="menuButtons">Next Card</div>
            </Menu.Item>
            <Menu.Item onClick={this.props.handleTrash}>
              <div className="menuButtons">New Reading</div>
            </Menu.Item>
          </Menu.Menu>
      </Menu>
    )
  }

}


export default AppMenu;
