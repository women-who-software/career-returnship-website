import React from "react"
import Styled from "styled-components"
import logo from "../images/Logo - white.svg"
import card from "../images/WWC-card.png"
import hero from "../images/Hero-subtract.png"

const Landing = () => {
  return (
    <LandingWrapper>
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
    </LandingWrapper>
  )
}

const LandingWrapper = Styled.div`
  @media (max-width: 700px) {

  }

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
`

export default Landing;
