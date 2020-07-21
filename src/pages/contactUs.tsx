import React from "react"
import {
  InputBoxName,
  InputBoxEmail,
  InputBoxMessage,
} from "../components/inputBoxContactUs"

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

export default ContactUS
