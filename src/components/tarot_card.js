import React, { Component } from 'react';

class TarotCard extends React.Component {
  render() {
    return (
      <div className="tarotCard row">
        <div className="col-md-3" >
          <img
            className='image'
            alt='Responsive image'
            src={this.props.src}
          />
        </div>
        <div>
          <h1>{this.props.title}</h1>
          <h3>{this.props.numericValue}</h3>
          <h3>{this.props.message}</h3>
        </div>
      </div>
    )
  }
}

export default TarotCard;
