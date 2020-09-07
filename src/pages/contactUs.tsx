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
        <Landing />

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
          <p>
            <label>
              Your name:
            <br />
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
            <br />
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
            <br />
              <textarea name="message" onChange={handleChange} />
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <Involved />
        <Events />
        <Projects />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = Styled.div`
align-items: center;
display: flex;
flex-direction: column;
width: 100%;



`