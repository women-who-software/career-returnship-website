// Node Modules
import React from "react"
import styled from "styled-components"
//relative imports
import logo from "../images/logoWhite.svg"
import card from "../images/wwcCard.png"
import hero from "../images/heroSubtract.png"

const Landing = () => (
  <LandingWrapper>
    <div className="hero">
      <img className="hero-image" src={hero} alt="background" />
      <img className ="logo" src={logo} alt="WWC Returnship icon" />
    </div>
    <div className="about-us">
      <h2>KICKSTARTING YOUR CAREER?</h2>
      <div className="row">
        <div className="column">
          <p>
            Re-entering the workforce after a break can be a huge challenge; <strong>together we can</strong> make this a lot easier. This initiative is a small step towards empowering those of us in technology as we relaunch our careers.
          </p>
          <img alt="WWC Returnship ad" className="card-mobile" src={card} />
          <button type="button">LEARN MORE</button>
        </div>      
        <img alt="WWC Returnship ad" className="card" src={card} />
      </div>
    </div>
  </LandingWrapper>
)

const LandingWrapper = styled.div`
  .landing {
    display: flex;
    flex-direction: column;
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

      .logo {
        width: 800px;
        margin-top: 25px;

        @media (max-width: 375px) {
          width: 275px;
        }
      }
    }

    .about-us {
      display: flex;
      flex-direction: column;
      width: 100%;
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

        @media (max-width: 375px) {
          text-align: center;
        }
      }

      .description {
        display: flex;
        flex-direction: row;

        @media (max-width: 375px) {
          flex-direction: column;
          width: 100%;
        }

        .column {
          display: flex;
          flex-direction: column;
          width: 100%;
    
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
