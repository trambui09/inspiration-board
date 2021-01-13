import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {
  // CARD_DATA : object, key is cards, value is arr of objects 
  const cardComponents = CARD_DATA.cards.map(card => {
    return (
      <Card 
        text={card.text} 
        emojiText={card.emoji}
      />
    )
  })


  return (
    <div>
      {cardComponents}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
