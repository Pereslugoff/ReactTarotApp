import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    cards: [
      {
        id: 1,
        title: 'The Magician',
        numericValue: 1,
        message: 'Create a new reality for yourself.',
      },
      {
        id: 2,
        title: 'The Popess',
        numericValue: 2,
        message: 'Know how to set boundaries.',
      },
      {
        id: 3,
        title: 'The Empress',
        numericValue: 3,
        message: 'Act from the guts.',
      },
      {
        id: 4,
        title: 'The Emperor',
        numericValue: 4,
        message: 'Show leadership and responsibility.',
      },
      {
        id: 5,
        title: 'The Pope',
        numericValue: 5,
        message: 'Create a new reality for yourself.',
      },
    ],

    numCards: 0,

  };


  handleSubmit = (e) => {
    e.preventDefault();
    let numCards = this.state.numCards;
    this.setState({ numCards: (this.state.numCards + 1) })
  }

  handleTrash = (e) => {
    e.preventDefault();
    this.setState({ numCards: 0 })
  }

  render() {
    return (
    <div className='tarotCardApp'>
      <NewCardButton
        handleSubmit={this.handleSubmit}
        handleTrash={this.handleTrash}
      />
      <TarotCardList
        cards={this.state.cards}
        numCards={this.state.numCards}
       />
      </div>
    );
  }
}

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
      />
    ));

    return (
      <div id="cards">
        {cards}
      </div>

    );
  }
}

class TarotCard extends React.Component {
  render() {
    return (
      <div className="tarotCards">
        <div>
          <h1>{this.props.title}</h1>
        </div>
        <div>
          <h3>{this.props.numericValue}</h3>
          <h3>{this.props.message}</h3>
        </div>
      </div>
    )
  }
}

class NewCardButton extends React.Component {
  render(){
    return (
      <div className='newCardButton'>
        <button
          onClick={this.props.handleSubmit}
        >
          Deal Card
        </button>
        <button
          onClick={this.props.handleTrash}
        >
          New Reading!
        </button>
      </div>
    )
  }
}

export default App;
