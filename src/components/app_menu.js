import React, { Component } from 'react';
import logo from '../images/ReactLogo.png'
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
                onClick={this.props.handleSubmit}
                disabled={this.props.disabled}
            >
              <div>Next Card</div>
            </Menu.Item>
            <Menu.Item
                onClick={this.props.handleTrash}
            >
              <div className="newReading" >New Reading</div>
            </Menu.Item>
          </Menu.Menu>
      </Menu>
    )
  }

}


export default AppMenu;

// <nav className="navbar navbar-light bg-light">
//
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//       <a
//         className="menuButtons nav-item nav-link"
//         onClick={this.props.handleSubmit}
//       >
//         Next Card
//       </a>
//       <a
//         className="menuButtons nav-item nav-link" onClick={this.props.handleTrash}
//       >
//         New Reading
//       </a>
//     </div>
//   </div>
// </nav>
