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
          />}
          className="dimmerView"
          basic
        >
          <Modal.Header className="dimmerTitle">{this.props.title}</Modal.Header>
          <Modal.Content image>
            <Image src={this.props.src} className="dimmerImage"/>
            <Modal.Description className="dimmerInfo">
              {this.props.message}
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
