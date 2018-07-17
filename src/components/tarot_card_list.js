import React, { Component } from 'react';
import TarotCard from './tarot_card';

class TarotCardList extends React.Component {
  render() {
    const deckList = [];
    for(var i = 0; i < this.props.numCards; i ++){
      deckList.push(this.props.cards[i]);
    }

    const cards = deckList.map((card) => (
      <TarotCard
        title={card.title}
        numericValue={card.numericValue}
        message={card.message}
        src={card.src}
      />
    ));

    return (
      <div id="cardContainer">
        {cards}
      </div>

    );
  }
}

export default TarotCardList;
