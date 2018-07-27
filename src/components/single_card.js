import React, { Component } from 'react';
import theBack from '../images/TheBack.jpg'
import { Dimmer, Header, Grid } from 'semantic-ui-react';

class SingleCard extends Component {
  state = {}

  handleOpen = () => this.setState({ active: true })
  handleClose = () => this.setState({ active: false })

  render() {

    const { active } = this.state;


    return (
      <div className="cardContainer">
        <div className="flip-container" onClick={this.handleOpen}>
        	<div className="flipper">
              <div className="front">
                <img src={theBack} />
              </div>
          		<div className="back">
          			<img src={this.props.src} />
          		</div>
        	</div>
        </div>
        <Dimmer active={active} onClickOutside={this.handleClose} page>
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={3}>
                <img src={this.props.src} />
              </Grid.Column>
              <Grid.Column width={13}>
                <div>
                  <h1>{this.props.title}</h1>
                  <p>{this.props.message}</p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Dimmer>
      </div>
    );
  }
}


export default SingleCard
