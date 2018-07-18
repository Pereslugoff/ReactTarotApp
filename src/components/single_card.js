import React, { Component } from 'react';
import theBack from '../images/TheBack.jpg'

class SingleCard extends Component {
  render() {
    return (
      <div className="flip-container">
      	<div className="flipper">
          <a onClick={this.props.onClick}>
        		<div className="front">
        			<img src={this.props.src} />
        		</div>
        		<div className="back">
        			<img src={theBack} />
        		</div>
          </a>
      	</div>
      </div>
    );
  }
}


export default SingleCard
