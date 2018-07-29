import React, { Component } from 'react';
import theBack from '../images/TheBack.jpg'

class SingleCard extends Component {

  render() {
    return (
      <div className="cardContainer" data-toggle="modal" data-target="#exampleModal">
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
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
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
