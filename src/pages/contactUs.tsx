import React from 'react'
import { navigate } from 'gatsby-link'
import Styled from "styled-components"
import Layout from '../components/layout'
import SEO from "../components/seo"
import Involved from "../components/InvolvedSection"
import Landing from "../components/LandingSection"
import Events from "../components/EventsSection"
import Projects from "../components/ProjectsSection"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <SEO title="Contact Us" />
      <Wrapper>


        <h1>Contact Us</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify-recaptcha="true"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}

        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <div className="info"><p>
            <label>

              <br />
              <input type="text" name="name" onChange={handleChange} placeholder="Your name" />
            </label>
          </p>
            <p>
              <label>

                <br />
                <input type="email" name="email" onChange={handleChange} placeholder="Your email" />
              </label>
            </p></div>
          <p>
            <label>

              <br />
              <textarea name="message" onChange={handleChange} placeholder="Write your message" />
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>

          <button type="submit">Send Message</button>

        </form>
        <div className="hidden">
          <p > Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor incididunut labore et dolore magna aliqua. Imperdiet sed euismod nisi porta lorem. Sem fringilla ut morbi tincidunt augue.</p>
          <button className="email-btn">Email Us</button>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = Styled.div`
margin: 0 auto;

width: 100%;
    h1 {
      margin-left: 250px;
      text-transform: uppercase;
    }
        form {
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 85%;
        }
        input, textarea {
          background: #E5E5E5;
          border: 1px solid #F4F4ED;
          box-sizing: border-box;
          color: #4C4C4C;
          font-size: 18px;
          line-height: 123.4%;
          letter-spacing: 0.02em;
          margin: 0 20px;
        }

        input {
          height: 54px;
          padding-left: 10px;
          width: 362px;
        }
        textarea {
          height: 234px;
          padding: 40px;
          width: 558px;
        }
        button {
          background: linear-gradient(180deg, #DA0D46 0%, #570018 100%), #DA0D46;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
          border: none;
          color: white;
          letter-spacing: 0.02em;
          margin: 50px 0 0 80px;
          padding: 10px 20px;
          text-align: center;
          text-transform: uppercase;
          width: 23%;
        }
        .hidden {
          display: none;
        }
        @media (max-width: 700px) {

          form {
            display: none;
          }
          h1 {
            font-size: 18px;
            margin: 20px auto;
            text-align: center;
          }
          .hidden {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          p {
            margin: 0 auto;
            width: 70%;
          }
          .email-btn {
            background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
            padding: 10px;
            margin: 20px auto;
            width: 50%
          }
        }

`
