import React, { Component } from 'react';
import theBack from '../images/TheBack.jpg'

class SingleCard extends Component {

  render() {
    return (



      <div className="cardContainer">
        <div className="flip-container" data-toggle="modal" data-target="#modalCard">
        	<div className="flipper">
            <div className="front">
              <img className="cardImage" src={theBack} />
            </div>
        		<div className="back">
        			<img className="cardImage" src={this.props.src} />
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}


export default SingleCard

// <Modal
//   open={this.state.open}
//   basic
//   size='large'
// >
//   <div className="dimmerView">
//     <h1 className="dimmerTitle">{this.props.title}</h1>
//     <img
//       className="dimmerImage"
//       src={this.props.src}
//     />
//     <p className="dimmerInfo">{this.props.message}</p>
//     <div className="dimmerFooter">
//       <Button
//
//         onClick={this.handleClose}
//       >
//         Close
//       </Button>
//     </div>
//   </div>
// </Modal>
