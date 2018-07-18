import React, { Component } from 'react';

class NewCardButton extends React.Component {
  render(){
    return (
      <div className='buttonHeader'>
        <div className='buttonGroup'>
          <button
            type='button'
            className="btn btn-primary"
            onClick={this.props.handleSubmit}
          >
            Next Card
          </button>
          <button
            type='button'
            className="btn btn-primary"
            onClick={this.props.handleTrash}
          >
            New Reading!
          </button>
        </div>
      </div>
    )
  }
}

export default NewCardButton;