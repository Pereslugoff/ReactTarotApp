import React, { Component } from 'react';
import theBack from '../images/TheBack.jpg'

class SingleCard extends Component {

  handleOpen = (evt) => {
    evt.preventDefault();
    console.log("#" + this.props.title);
  }

  render() {
    let name = "modal" + this.props.title

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
        <div className="modal fade" id="modalCard" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.props.title}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
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
