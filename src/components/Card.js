import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">You got this Tram!</p>
        <p className="card__content-emoji">{emoji.getUnicode("beer")}</p>
      </div>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
