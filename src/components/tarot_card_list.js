import React, { Component } from 'react';
import TarotCard from './tarot_card';
import SingleCard from './single_card';
import { Container, Modal, Button } from 'semantic-ui-react';

class TarotCardList extends React.Component {

  state = {
    open: false
  }

  handleOpen = (e) => {
    e.preventDefault();
    this.setState({ open: true })
  }

  render() {

    const deckList = [];
    for(var i = 0; i < this.props.numCards; i ++){
      deckList.push(this.props.cards[i]);
    }

    const cards = deckList.map((card) => (
      <div>
        <SingleCard
          key={card.id}
          title={card.title}
          numericValue={card.numericValue}
          message={card.message}
          src={card.src}
          onClick={this.handleOpen}
          open={this.state.open}
        />
      </div>
    ));

    return (
        <div className="wrapper">
          {cards}
        </div>

    );
  }
}

export default TarotCardList;
