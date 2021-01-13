import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {

  const [formFields, setFormFields] = useState({
    text: '',
    emoji: '',
  });

  // onChange function 

  const onFormChange = (event) => {

    const {name, value} = event.target

    const newFields = {
      ...formFields
    }

    newFields[name] = value
    setFormFields(newFields)

  }

  // onSubmit function pass up the formFields to the board component

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.onAddCard(formFields)

    setFormFields({
      text: '',
      emoji: '',
    })
  }

  return (
    <form className='new-card-form' onSubmit={onFormSubmit}>
      <p className='new-card-form__header'>Submit a Card!</p>
      <div className='new-card-form__form'>
        <label className='new-card-form__form-label'>
          Text:
          <textarea 
            value={formFields.text} 
            name='text' 
            onChange={onFormChange} 
            className='new-card-form__form-textarea'
          />
        </label>
      </div>

      <div className='new-card-form__form'>
        <label className='new-card-form__form-label'>
          Emoji
          <select value={formFields.emoji} name='emoji' onChange={onFormChange} className='new-card-form__form-select'>
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