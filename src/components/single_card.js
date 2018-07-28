import React, { Component } from 'react';
import theBack from '../images/TheBack.jpg'
import { Dimmer, Modal, Button } from 'semantic-ui-react';

class SingleCard extends Component {
  state = {}

  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <div className="cardContainer">
        <div className="flip-container" onClick={this.handleOpen}>
        	<div className="flipper">
              <div className="front">
                <img src={theBack} />
              </div>
          		<div className="back">
          			<img src={this.props.src} />
          		</div>
        	</div>
        </div>
        <Modal
          open={this.state.open}
        >
          <Modal.Header>{this.props.title}</Modal.Header>
          <img src={this.props.src} />
          <Modal.Content>
            <Modal.Description>
              <p><Button onClick={this.handleClose}>Close</Button></p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}


export default SingleCard

// <Dimmer active={active} onClickOutside={this.handleClose} page>
//   <div className="dimmerView">
//     <div className="dimmerImage">
//       <img src={this.props.src} />
//     </div>
//     <div className="dimmerInfo">
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.message}</p>
//       </div>
//     </div>
//   </div>
// </Dimmer>
