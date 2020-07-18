import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import logo from "../images/Logo - white.svg"
import card from "../images/WWC-card.png"
import hero from "../images/Hero-subtract.png"
import nanno from "../images/Sponsors-nanno.png"
import snapdocs from "../images/Sponsors-snapdocs.png"
import workability from "../images/Sponsors-workability.png"
import namecom from "../images/Sponsors-name.png"
import radial from "../images/Sponsors-radial.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <div className="landing">
        <div className="hero">
          {/* <img className ="hero-img" src={hero} alt="Woman looking at a monitor" /> */}
          <img className ="logo" src={logo} alt="WWC Returnship icon" width="500" height="600"/>
        </div>
        <div className="about-us">
          <h2>KICKSTARTING YOUR CAREER?</h2>
          <div className="description">
            <div className="column">
              <p>Re-entering the workforce after a break can be a huge challenge; <span>together we can</span> make this a lot easier. This initiative is a small step towards empowering those of us in technology as we relaunch our careers.</p>
              <button>LEARN MORE</button>
            </div>
            <img className="card" src={card} alt="WWC Returnship ad" />
          </div>
        </div>
      </div>  
      <div className="get-involved">
        <h2>WANT TO GET INVOLVED?</h2>
        <div className="columns">
          <div className="column1">
            <button>BECOME A MEMBER</button>
            <p>We meet every 2 weeks on Wednesday. <br /><br /> 6:00-8:00pm<br />Sign-up online with Meetup</p>
          </div>
          <div className="column2">
            <button>BE A SPONSOR/VOLUNTEER</button>
            <p>Interested in partnering with us? We are currently looking to fill a few options:
              <br /><br />
              <ul style={'list-style-type:circle;'}>
                <span>
                  <li>Weekly Food Sponsors</li>
                  <li>Host Mock Interviews</li>
                  <li>Lead a Code Challenge</li>
                  <li>Portfolio/Resume Review</li>
                  <li>Lightening Talks</li>
                  <li>Domain Sponsorship</li>
                  <li>Donations</li>
                </span>
              </ul>
            </p>
          </div>
          <div className="column3">
            <div className="logos-rows">
              <img className="logo" src={nanno} alt="Nanno logo" />
              <img className="logo" src={snapdocs} alt="Snapdocs logo" />
            </div>
            <div className="logos-rows">
              <img className="logo" src={workability} alt="WWC Returnship ad" />
              <img className="logo" src={namecom} alt="WWC Returnship ad" />
            </div>
            <div className="logo-row">
              <img className="logo" src={radial} alt="WWC Returnship ad" />  
            </div>
          <p>Thank you sponsors!</p>
          </div>
        </div>
      </div>
      <div className="events">
        <h2>NETWORKING / EVENTS</h2>
        <div className="columns">
          <div className="column1"></div>
          <div className="column2"></div>
          <div className="column3"></div>
        </div>
        <a className="link-more" href="https://www.meetup.com/Women-Who-Code-Boulder-Denver/events/fnbxtrybckbdc/">view more upcoming events</a>
      </div>
      <div className="projects"></div>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  .landing {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    /* background-image: url('../images/Hero-subtract.png') no-repeat fixed center; */

    .hero {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      height: 75vh;
      width: 100%;
      padding-top: 100px;
      background: url("${hero}") no-repeat center;

      .hero-img {
        max-width: 100%;
      }

      .logo {
        width: 750px;
        height: 172px;
      }

      h1 {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        font-weight: lighter;
        letter-spacing: 0.02em;
        color: #FFFFFF;
      }
    }

    .about-us {
      display: flex;
      flex-direction: column;
      width: 100%
      height: 40vh;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 20px 300px;

      h2 {
        color: #DA0D46;
        font-family: 'Myriad Pro', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 42px;
        letter-spacing: 0.02em;
      }

      .description {
        display: flex;
        flex-direction: row;

        .column {
          display: flex;
          flex-direction: column;
    
          p {
            font-family: Montserrat, sans-serif;
            font-style: normal;
            font-weight: lighter;
            font-size: 18px;
            line-height: 123.4%;
            letter-spacing: 0.02em;
            color: #000000;
            padding-right: 20px;

            span {
              font-weight: bold;
              font-style: italic;
            }
          }

          button {
            font-family: Myriad Pro, sans-serif;
            font-size: 16px;
            font-weight: bold;
            line-height: 123.4%;
            display: flex;
            align-self: center;
            text-align: center;
            letter-spacing: 0.02em;
            color: #DA0D46;
            border: 1px solid #DA0D46;
            box-sizing: border-box;
            border-radius: 15px;
            padding: 15px 70px;
          }
        }

        img {
          width: 272px;
          height: 172px;
          border-radius: 15px;    
        }
      }
    }
  }

  .get-involved {
    height: 60vh;
    width: 100%;
    background: #DA0D46;
    padding: 20px 300px;

    h2 {
      font-family: Myriad Pro, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      color: #FFFFFF;
    }

    .columns {
      display: flex;
      flex-direction: row;
      width: 100%;

      p {
          font-family: Montserrat, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          color: #FFFFFF;
          padding-top: 10px;
        }

      .column1 {
        min-width: 280px;

        button {
          font-family: Myriad Pro, sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #FFFFFF;
          padding: 15px 35px;

          background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
        }
      }

      .column2 {
        min-width: 280px;

        button {
          font-family: Myriad Pro, sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #4C4C4C;
          padding: 15px 15px;

          background: linear-gradient(180deg, #FFFFFF 0%, #E9CFD6 100%);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
        }

        span {
          font-size: 14px;
        }
      }

      .column3 {
        min-width: 280px;
    
        .logo {
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          width: 116px;
          height: 40px;
        }

        .logos-rows {
          display: flex;
          justify-content: space-around;
        }

        .logo-row {
          display: flex;
          justify-content: center;
        }
    
        p {
          font-family: Noteworthy;
          font-style: normal;
          font-weight: normal;
          font-size: 26px;
          text-align: center;
          padding-top: 20px;
        }
      }
    }
  }

  .events {
    height: 60vh;
    width: 100%;
    background: url("${hero}");
    padding: 20px 300px;
  }

  .projects {
    height: 100vh;
  }
`

export default IndexPage;
