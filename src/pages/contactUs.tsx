import React from "react"
import Layout from "../components/layout"

import {
  InputBoxName,
  InputBoxEmail,
  InputBoxMessage,
} from "../components/inputBoxContactUs"

const ContactUS = () => {
  return (
    <Layout>
      <div>
        <InputBoxName />
        <br />
        <InputBoxEmail />
        <br />
        <InputBoxMessage />
      </div>
    </Layout>
  )
}

export default ContactUS
