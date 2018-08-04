import React, { Component } from 'react';
import TarotCard from './tarot_card';
import SingleCard from './single_card';

class TarotCardList extends React.Component {

  state = {
    open: false
  }

  render() {

    const deckList = [];
    for(var i = 0; i < this.props.numCards; i ++){
      deckList.push(this.props.cards[i]);
    }

    const cards = deckList.map((card) => (
        <SingleCard
          key={card.id}
          title={card.title}
          numericValue={card.numericValue}
          message={card.message}
          src={card.src}
        />
    ));

    return (
        <div className="wrapper">
          {cards}
        </div>

    );
  }
}

export default TarotCardList;
