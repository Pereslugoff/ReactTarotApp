import React, {Component} from 'react'


class ModalCard extends Component {

  render(){
    return (
      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle"> {this.props.title}</h5>
            </div>
            <div className="modal-body">
              {this.props.message}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalCard
