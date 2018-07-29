import React, { Component } from 'react';
import logo from '../images/ReactLogo.png'

class AppMenu extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="appName navbar-brand mb-0 h1"
        >
          ReactTar<img src={logo} className="logo" />t
        </div>
        <div className="navbar-collapse">
          <div className="navbar-nav menuButtons">
            <a className="nav-item" onClick={this.props.handleSubmit}>Next Card</a>
            <a className="nav-item" onClick={this.props.handleTrash}>New Reading</a>
          </div>
        </div>
      </nav>
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

// <Menu fluid className="navBar" borderless>
//   <Menu.Menu>
//     <Menu.Item>

//     </Menu.Item>
//   </Menu.Menu>
//     <Menu.Menu position="right">
//       <Menu.Item onClick={this.props.handleSubmit} disabled={this.props.disabled}>
//         <div className="menuButtons">Next Card</div>
//       </Menu.Item>
//       <Menu.Item onClick={this.props.handleTrash}>
//         <div className="menuButtons">New Reading</div>
//       </Menu.Item>
//     </Menu.Menu>
// </Menu>
