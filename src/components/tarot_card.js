import React, { Component } from 'react';

class TarotCard extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div id="cardImage" >
          <img src={this.props.src} />
        </div>
        <div id="cardInfo" >
          <h1>{this.props.title}</h1>
          <h3>{this.props.numericValue}</h3>
          <h3>{this.props.message}</h3>
        </div>
      </div>
    )
  }
}

export default TarotCard;
