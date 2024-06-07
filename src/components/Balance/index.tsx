import React, { useState } from 'react';
import { IBalanceProps } from '../../models/interfaces/IBalanceProps';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const Balance = ({ emitMovement, currentBalance }: IBalanceProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputForm = () => {
    setRenderInputForm(!renderInputForm);
  }

  const hideInputForm = () => {
    setRenderInputForm(false);
    setIsFormValid(false);
    setInputName("");
    setInputValue("");
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputName.trim() == "" || inputValue.trim() == "") {
      setIsFormValid(false)
      return;
    }

    emitMovement({ name: inputName, value: inputValue, type: 'income' });
    hideInputForm();
  }

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim()) {
      setIsFormValid(false);
    }

    setIsFormValid(true);
    setInputName(event.target.value);
  }

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim()) {
      setIsFormValid(false);
    }

    setIsFormValid(true);
    setInputValue(event.target.value);
  }

  return (
    <div>
      <div className='balance_container'>
        <div className="balance_card">
          <header className='balance_header'>
            <FontAwesomeIcon icon={faDollar} color='#7AF1A7' size='2x'/>
            <h2>Balance</h2>
          </header>
          <h3>{currentBalance > 0 ? "R$ " + currentBalance : "R$ 0"}</h3>
          { !renderInputForm && (
            <Button action={handleInputForm} title='Income' priority='input'/>
          )}
          {
            renderInputForm && (
              <form onSubmit={handleSubmit}>
                <div className={`input_form_container ${!isFormValid ? 'invalid' : ''}`}>
                  <input type='text' placeholder='Name' className='balance_input' value={inputName} onChange={handleInputName}/>
                  <input type='number' placeholder='Value' className='balance_input' value={inputValue} onChange={handleInputValue}/>
                </div>
                <div className='actions_form_buttons_container'>
                  <Button action={hideInputForm} title='Cancel' priority='output'/>
                  <Button title='Confirm' priority='input' type='submit'/>
                </div>
              </form>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Balance;
