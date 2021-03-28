// Gatsby supports TypeScript natively!
import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import about from "../images/aboutMountains.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About Career Returnship" />
    <Wrapper>
      <div className="description">
        <h2 className="title">ABOUT US</h2>
        <div className="columns">
          <div className="column text">
            Kickstarting your career and reentering the workforce after a break
            can be a huge challenge; together we can make this a lot easier. This
            initiative is a small step towards empowering those of us in
            technology trying to relaunch our careers.
            <br />
            <br />
            Join us in this biweekly event series where we learn, network, engage
            in
          </div>
          <div className="column text">
            meaningful projects and crack the interviews together.
            <br />
            <br />
            <span className="strong">Who should attend:</span> If you are thinking about restarting your career or
            if you are currently struggling alone in the process, this program is
            for you. If you are currently working, we would love your insights to
            help the community.
          </div>
          <a className="join-us-button" href="https://form.jotform.com/203243227290043" target="_blank" rel="noreferrer">
            JOIN US
          </a>
          <a className="become-sponsor-button" href="https://form.jotform.com/203324916543150" target="_blank" rel="noreferrer">
            SPONSOR/PARTNER
          </a>
          <div className="column gray-section">
            <img className="about-image" src={about} alt="women smiling" />
            <a className="link" href="https://www.womenwhocode.com/" target="_blank" rel="noreferrer">WOMEN WHO CODE</a>
            <a className="link" href="https://www.womenwhocode.com/boulder-denver" target="_blank" rel="noreferrer">WWC - DENVER/BOULDER</a>
            <Link className="link" to="/contactUs">CONTACT US</Link>
          </div>
        </div>
        <a className="find-meeting-button" href="https://www.meetup.com/Women-Who-Code-Boulder-Denver/events/" target="_blank" rel="noreferrer">
          FIND OUR NEXT MEETING
        </a>
      </div>
    </Wrapper>
  </Layout>
)

const Wrapper = Styled.div`
align-items: center;
display: flex;
flex-direction: column;
width: 100%;

.description {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.25rem;
  margin: 0 0 3.125rem;
  max-width: 56.25rem;
  width: 100%;

  h2 {
    color: #DA0D46;
    font-family: Myriad Pro, sans-serif;
    font-weight: 700;
    font-size: 1.875rem;
    margin: 0rem;
    padding: 1.875rem 0rem 1.875rem;

    @media ( min-width: 43.75rem) {
      align-self: flex-start;
      padding-left: 1.25rem;
      padding-top: 6.25rem;
      padding-bottom: 2.1875rem;
      font-size: 2.875rem;
    }
  }

  .columns {
    display: flex;
    flex-direction: column;

    @media ( min-width: 43.75rem) {
      flex-direction: row;
      flex-basis: auto;
    }

    .text {
      font-family: Montserrat, sans-serif;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.375rem;
      margin: 0rem 1.25rem 0rem;
    
      .strong {
        font-weight: 700;
      }
    }

    .join-us-button {
      align-items: center;
      background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
      border-radius: .9375rem;
      border: none;
      box-shadow: 0rem .25rem .25rem rgba(0, 0, 0, 0.25);
      color: #FFFFFF;
      display: flex;
      font-family: Myriad Pro, sans-serif;
      font-size: .9375rem;
      font-weight: 700;
      height: 3.125rem;
      justify-content: center;
      margin: 2.1875rem auto .9375rem;
      padding: 0;
      outline: none;
      text-decoration: none;
      width: 14.375rem;

      @media ( min-width: 43.75rem) {
        display: none;
      }
    }

    .become-sponsor-button {
      align-items: center;
      background: linear-gradient(180deg, #DA0D46 0%, #570018 100%), #DA0D46;
      box-shadow: 0rem .25rem .25rem rgba(0, 0, 0, 0.25);
      border-radius: .9375rem;
      color: #ffffff;
      display: flex;
      font-family: Myriad Pro, sans-serif;
      font-size: .9375rem;
      font-weight: 700;
      height: 3.125rem;
      justify-content: center;
      line-height: 123.4%;
      letter-spacing: 0.02em;
      margin: .9375rem auto .9375rem;
      outline: none;
      padding: 1.25rem;
      text-decoration: none;
      width: 14.375rem;

      @media ( min-width: 43.75rem) {
        display: none;
      }
    }
  }

  .gray-section {
    display: flex;
    flex-direction: column;

    .about-image {
      width: 23.4375rem;
      height: 12.75rem;
      margin: 1.875rem 0rem .3125rem;
      top-left-radius: .9375rem;
      top-right-radius: .9375rem;

      @media ( min-width: 43.75rem) {
        width: 14.375rem;
        height: 7.75rem;
        margin-bottom: .1875rem;
        margin-left: 1.25rem;
        margin-top: 0rem;
      }
    }

    .link {
      width: 100%;
      height: 5.3125rem;
      background-color: #A8C4C8;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #000000;
      font-family: Myriad Pro, sans-serif;
      font-size: .9375rem;
      font-weight: 700;
      margin: 0rem 0rem .25rem;

      @media ( min-width: 43.75rem) {
        width: 14.375rem;
        height: 3.25rem;
        margin-bottom: .125rem;
        margin-left: 1.25rem;
      }
    }
  }

  .find-meeting-button {
    align-items: center;
    background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
    border-radius: .9375rem;
    border: none;
    box-shadow: 0rem .25rem .25rem rgba(0, 0, 0, 0.25);
    color: #FFFFFF;
    display: flex;
    font-family: Myriad Pro, sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    height: 3.75rem;
    justify-content: center;
    margin: 5rem auto 2.5rem;
    padding: 0;
    text-decoration: none;
    outline: none;
    width: 18.75rem;    

    @media ( max-width: 43.75rem) {
      display: none;
    }
  }
}
`

export default AboutPage
