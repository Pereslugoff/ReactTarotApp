import React, { Component } from 'react';
import theBack from '../images/TheBack.jpg'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class SingleCard extends Component {

  render() {
    return (
        <Modal trigger={
          <Card
            key={this.props.key}
            src={this.props.src}
          />
        }>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>{this.props.title}</Header>
              <p>Weve found the following gravatar image associated wit/ your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
    );
  }
}

const Card = ({ src, ...otherProps}) => (
      <div className="cardContainer" {...otherProps}>
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <img className="cardImage" src={theBack} />
            </div>
            <div className="back">
              <img className="cardImage" src={src} />
            </div>
          </div>
        </div>
      </div>
);


export default SingleCard
