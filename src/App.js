import React, { Component } from 'react';
import AppMenu from './components/app_menu';
import TarotCardList from './components/tarot_card_list';
import cardData from './components/cardData';


class App extends React.Component {

  state = {
    cards: cardData,

    numCards: 3,

  };

  handleNewCard = (e) => {
    e.preventDefault();
    let numCards = this.state.numCards + 1;
    if(numCards < 4){
      this.setState({ numCards: (this.state.numCards + 1) })
    }
  }

  handleNewReading = (e) => {
    e.preventDefault();
    this.shuffle();
    this.setState({ numCards: 0 });
  }

  handleShuffle = (e) => {
    e.preventDefault();
    this.shuffle();
  }

  shuffle = () => {
    let cards = Object.assign([], this.state.cards);
    let counter = this.state.cards.length - 1;
    for(counter; counter >= 0; counter--) {
      let index = Math.floor(Math.random() * (counter + 1));
      let temp = cards[counter];
      cards[counter] = cards[index];
      cards[index] = temp;
    };
    this.setState({ cards: cards })
  }

  render() {

    return (
        <div>
          <div className="navBar">
            <AppMenu
              numCards={this.state.numCards}
              disabled={this.state.disabled}
              handleNewCard={this.handleNewCard}
              handleNewReading={this.handleNewReading}
            />
          </div>
          <div className='tarotCardContainer'>
            <ul className="timePosition">
              <li>Past</li>
              <li>Present</li>
              <li>Future</li>
            </ul>
            <TarotCardList
              cards={this.state.cards}
              numCards={this.state.numCards}
             />
          </div>
        </div>
    );
  }
}

export default App;
