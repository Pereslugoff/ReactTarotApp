import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react'
import logo from '../logo.svg'

class AppMenu extends Component {

  handleClick = (e) => {
    e.preventDefault()
    alert('New Card Button clicked!')
  }

  render() {
    return (
      <Menu inverted>
        <Menu.Menu>
          <Menu.Item>
            TarotReact
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item onClick={this.props.handleSubmit}>
            Next Card
          </Menu.Item>
          <Menu.Item onClick={this.props.handleTrash}>
            New Reading
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }

}




  // render(){
  //   return (
  //     <div className='buttonHeader'>
  //       <div className='buttonGroup'>
  //         <button
  //           type='button'
  //           className="btn btn-primary"
  //           onClick={this.props.handleSubmit}
  //         >
  //           Next Card
  //         </button>
  //         <button
  //           type='button'
  //           className="btn btn-primary"
  //           onClick={this.props.handleTrash}
  //         >
  //           New Reading!
  //         </button>
  //       </div>
  //     </div>
  //   )
  // }


export default AppMenu;
