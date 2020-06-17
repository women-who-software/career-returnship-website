import React from 'react';
import InputBoxName from '../components/inputBoxContactUs';
import InputBoxEmail from '../components/inputBoxContactUs';
import InputBoxMessage from '../components/inputBoxContactUs';

const ContactUS = () => {

  return (
    <div>
      <InputBoxName />
      <br />
      <InputBoxEmail />
      <br />
      <InputBoxMessage />
     </div>
  )
}

export default ContactUS;