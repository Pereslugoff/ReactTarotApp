import React, { Component } from 'react';
import TarotCard from './tarot_card';
import SingleCard from './single_card';
import { Button, Dimmer, Header, Image, Segment } from 'semantic-ui-react';

class TarotCardList extends React.Component {

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

// <TarotCard
//   title={card.title}
//   numericValue={card.numericValue}
//   message={card.message}
//   src={card.src}
// />
