import React, { useState } from 'react'
import Styled from 'styled-components'
import NetlifyForm from 'react-ssg-netlify-forms'
import { navigate } from 'gatsby'

const ContactForm = () => {

  // Pre-Submit for validations and disabling button
  const [processing, setProcessing] = useState(false)
  const preSubmit = async () => {
    if (formValues.name.length > 0 && formValues.email.length > 0) {
      setProcessing(true)
      // Wait 2 seconds to simulate async delay (maybe user confirmation? or 
      // external checks?)
      await (new Promise(resolve => setTimeout(resolve, 2000)))
      return true
    }
    else {
      return false
    }
  }

  // Post-Submit for navigating to 'Thank You' page .. or maybe displaying 'sent!'
  // text; totally up to you!
  const postSubmit = () => {
    console.log('Sent!')
    setProcessing(false)
    navigate('/success')
  }

  // Simple controlled form setup
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <Wrapper>
      <h1>Contact Us</h1>
      <NetlifyForm
        formName="Contact Form"
        formValues={formValues}
        preSubmit={preSubmit}
        postSubmit={postSubmit}
        automaticHoneypot={true}
      >
        <div class="info_fields">
          <div style={{ padding: '10px' }}>
            <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Your Name" />
          </div>
          <div style={{ padding: '10px' }}>
            <input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Your Email" />
          </div>
        </div>
        <div style={{ padding: '10px' }}>
          <textarea name="message" value={formValues.message} onChange={handleChange} placeholder="Your Message" />
        </div>
        <div style={{ padding: '10px' }}>
          <button disabled={processing} type="submit" className="submit">Send</button>
        </div>
      </NetlifyForm>

    </Wrapper>
  )
}


export default ContactForm


const Wrapper = Styled.div`
    margin: 0 auto;
    height: 75vh;
    padding: 50px 0;
    text-align: center;
    width: 100%;
    h1 {
      font-size: 2rem;
      text-align: center;
      text-transform: uppercase;
    }
        form {
          margin: 0 auto;
          width: 100%;
        }
       
        
        input{
          
          background: #E5E5E5;
          border: 1px solid #F4F4ED;
          box-sizing: border-box;
          color: #4C4C4C;
          font-size: 18px;
          margin: 5px 20px;
          height: 5vh;
          
        }
        textarea {
          background: #E5E5E5;
          border: 1px solid #F4F4ED;
          box-sizing: border-box;
          color: #4C4C4C;
          height: 20vh;
          width: 20rem;
          padding: 10px;
        }
        .info {
          width: 350px;
          margin: 0;
        }
        .submit {
          background: linear-gradient(180deg, #DA0D46 0%, #570018 100%), #DA0D46;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
          border: none;
          color: white;
          letter-spacing: 0.02em;
          padding: 10px 0;
          
          text-align: center;
          text-transform: uppercase;
          width: 8rem;
        }
        .ReCAPTCHA {
          margin:0;
        }
        .hidden {
          display: none;
        }
      @media (min-width: 700px) {
         form{
             display: flex;
             flex-wrap: wrap;
             justify-content: center;
             max-width: 40rem;
         }
         .info_fields {
           display: flex;
           flex-direction: column;
         }
         input{
           margin: 0;
           padding: 0 1rem;
           width: 15rem;
         }
         
          .submit {
            
            margin-left: 5rem;
          }
      }
    
}
`