import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const API_CARDS_URL = 'https://inspiration-board.herokuapp.com/cards'

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

  const deleteCard = (id) => {
    // the card comp is passing up the id of the card
    // delete to from the cards and use axios to do the delete request 
    // need to make a new student list and filter 
    // returning all the cards that doesn't match the id param passed in 

    const newCards = cards.filter((singleCard) => {
      return singleCard.card.id !== id;
    })

    // change our student List AND tell axios to delete the student from our API via id
    // not going into this conditional because the newCards length is the same as the cards length 
    // the DS is a layer deeper than I thought, it's singleCard.card.id not card.id
    if (newCards.length < cards.length) {
      axios.delete(`${API_CARDS_URL}/${id}`)
      .then((res) => {
        setErrorMessage(`Card #${id} deleted!`)
      })
      .catch((err) => {
        setErrorMessage(`Unable to delete card #${id}`)
      })
      setCards(newCards)
    }
  }


  // CARD_DATA : object, key is cards, value is arr of objects 
  // cards = array of objects
  // card = object
  // passing down the deleteCard function to use as a callback
  const cardComponents = cards.map(singleCard => {
    return (
      <Card 
        key={singleCard.card.id}
        id={singleCard.card.id}
        text={singleCard.card.text} 
        emojiText={singleCard.card.emoji}
        onDeleteCard={deleteCard}
      />
    )
  })

  const addCard = (card) => {
    // generate a new id , won't the post request generate an id for us already?

    // copy the old cards array in here

    // axios post request 

    // setCards to be newCards
    
    axios.post(`${props.url}${props.boardName}/cards`, card)
      .then((res) => {
        const updatedData = [...cards, res.data];
        setCards(updatedData)
        setErrorMessage('')
      })
      .catch((err) => {
        setErrorMessage(errorMessage)
      });
  }


  return (
    <div>
      <NewCardForm onAddCard={addCard}/>
      {cardComponents}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
