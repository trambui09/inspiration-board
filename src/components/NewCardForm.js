import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = () => {

  const [formFields, setFormFields] = useState({
    text: '',
    emoji: '',
  });

  return (
    <form className='new-card-form'>
      <p className='new-card-form__header'>Submit a Card!</p>
      <div>
        <label className='new-card-form__form-label '>
          Text:
          <textarea  />
        </label>
        

      </div>

      <div>
        <label className='new-card-form__form-label '>
          Emoji
          <select>
            <option value=''></option>
            <option value='heart_eyes'>{emoji.getUnicode('heart_eyes')}</option>
            <option value='beer'>{emoji.getUnicode('beer')}</option>
            <option value='clap'>{emoji.getUnicode('clap')}</option>
            <option value='sparkling_heart'>{emoji.getUnicode('sparkling_heart')}</option>
            <option value='heart_eyes_cat'>{emoji.getUnicode('heart_eyes_cat')}</option>
            <option value='dog'>{emoji.getUnicode('dog')}</option>
          </select>
        </label>
        

      </div>
      <input
        type="submit"
        value="Add Card"
        className='new-card-form__form-button'
      />


    </form>

  )
}

NewCardForm.propTypes = {

}

export default NewCardForm;