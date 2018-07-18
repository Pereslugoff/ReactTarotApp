import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import theFool from './images/TheFool.jpg';
import theHighPriestess from './images/TheHighPriestess.jpg';
import theEmpress from './images/TheEmpress.jpg';
import theEmperor from './images/TheEmperor.jpg';
import theMagician from './images/TheMagician.jpg';
import NewCardButton from './components/new_card_button';
import TarotCardList from './components/tarot_card_list';

class App extends React.Component {

  state = {
    cards: [
      {
        id: 1,
        title: 'The Magician',
        numericValue: 1,
        message: 'Create a new reality for yourself.',
        src: theMagician,
      },
      {
        id: 2,
        title: 'The Popess',
        numericValue: 2,
        message: 'Know how to set boundaries.',
        src: theHighPriestess,
      },
      {
        id: 3,
        title: 'The Empress',
        numericValue: 3,
        message: 'Act from the guts.',
        src: theEmpress,
      },
      {
        id: 4,
        title: 'The Emperor',
        numericValue: 4,
        message: 'Show leadership and responsibility.',
        src: theEmperor,
      },
      {
        id: 5,
        title: 'The Pope',
        numericValue: 5,
        message: 'Create a new reality for yourself.',
        src: theFool,
      },
    ],

    numCards: 0,

  };

  handleSubmit = (e) => {
    e.preventDefault();
    let numCards = this.state.numCards;
    if(numCards < this.state.cards.length){
      this.setState({ numCards: (this.state.numCards + 1) })
    }
  }

  handleTrash = (e) => {
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
        <div className="container-fluid">
          <nav className="navbar navbar-light bg-light fixed-top">
            <a className="navbar-brand">Tarot</a>
            <NewCardButton
              handleSubmit={this.handleSubmit}
              handleTrash={this.handleTrash}

            />
          </nav>
          <div className='tarotCardContainer'>
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
