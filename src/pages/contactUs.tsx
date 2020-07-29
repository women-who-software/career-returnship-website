import React from 'react';
import InputBoxName from '../components/inputBoxContactUs';
import InputBoxEmail from '../components/inputBoxContactUs';
import InputBoxMessage from '../components/inputBoxContactUs';
import { Link } from "gatsby"

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