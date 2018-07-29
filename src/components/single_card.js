import React, { Component } from 'react';
import theBack from '../images/TheBack.jpg'
import { Dimmer, Modal, Button } from 'semantic-ui-react';

class SingleCard extends Component {
  state = {}

  handleOpen = () => this.setState({ open: !this.state.open })
  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <div className="cardContainer">
        <div className="flip-container" onClick={this.handleOpen}>
        	<div className="flipper">
            <div className="front">
              <img className="cardImage" src={theBack} />
            </div>
        		<div className="back">
        			<img className="cardImage" src={this.props.src} />
        		</div>
        	</div>
        </div>
        <Modal
          open={this.state.open}
          basic
          size='large'
        >
          <div className="dimmerView">
            <h1 className="dimmerTitle">{this.props.title}</h1>
            <img
              className="dimmerImage"
              src={this.props.src}
            />
            <p className="dimmerInfo">{this.props.message}</p>
            <div className="dimmerFooter">
              <Button

                onClick={this.handleClose}
              >
                Close
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}


export default SingleCard

// <Dimmer active={active} onClickOutside={this.handleClose} page>
// </Dimmer>
