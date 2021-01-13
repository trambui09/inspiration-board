import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  

  const [cards, setCards] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  // use axios to grab all the cards from the API
  // https://inspiration-board.herokuapp.com/boards/tram-bui/cards
  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`)
      .then((res) => {
        const apiCards = res.data;
        setCards(apiCards)
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }, []);


  // CARD_DATA : object, key is cards, value is arr of objects 
  // cards = array of objects
  // card = object
  const cardComponents = cards.map(singleCard => {
    return (
      <Card 
        key={singleCard.card.id}
        text={singleCard.card.text} 
        emojiText={singleCard.card.emoji}
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
