import React from 'react';

const InputBoxName = () => {
  const inputBoxName = 'Your name';
  const inputBoxNameStyle = {
    fontSize: '20px'
  };

  return <input
    placeholder={ inputBoxName }
    style={ inputBoxNameStyle } />
}

const InputBoxEmail = () => {
  const inputBoxEmail = 'Email placeholder';
  const inputBoxEmailStyle = {
    fontSize: '20px'
  };

  return <input
    placeholder={ inputBoxEmail }
    style={ inputBoxEmailStyle } />
}


const InputBoxMessage = () => {
  const inputBoxMessage = 'Write your message';
  const inputBoxMessageStyle = {
    fontSize: '100px'
  };

  return <input
    placeholder={ inputBoxMessage }
    style={ inputBoxMessageStyle } />

};


export {InputBoxName, InputBoxEmail, InputBoxMessage}