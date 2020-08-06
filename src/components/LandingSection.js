// Node Modules
import React from "react"
import styled from "styled-components"
//relative imports
import logo from "../images/logoWhite.svg"
import card from "../images/wwcCard.png"
import hero from "../images/heroSubtract.png"

const LandingSection = () => (
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
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100%;

    .hero {
      display: flex;
      align-items: flex-start;
      background: #ffffff;
      justify-content: center;
      min-height: 75vh;
      position: relative;
      width: 100%;
      
      .hero-image {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 1;
      }

      .logo {
        max-width: 800px;
        padding: 0 20px;
        position: absolute;
        top: 120px;
        width: 100%;
        z-index: 2;
      }
    }

    .about-us {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0px 20px;
      margin: 0 0 50px;
      max-width: 900px;
      width: 100%;

      h2 {
        color: #DA0D46;
        font-family: 'Myriad Pro', sans-serif;
        font-weight: 600;
        font-size: 2.4rem;
      }

      .row {
        display: flex;

        @media screen and (max-width: 600px) {
          align-items: center;
          flex-direction: column; 
          width: 100%;
        }

        .column {
          align-items: center;
          display: flex;
          flex-direction: column;
          margin-right: 20px;

          p {
            color: #000000;
            font-size: 1.2rem;
            letter-spacing: 0.02em;

            strong {
              font-style: italic;
            }
          }

          button {
            align-self: center;
            background: #ffffff;
            border-radius: 15px;
            box-sizing: border-box;
            color: #DA0D46;
            display: flex;
            font-family: Myriad Pro, sans-serif;
            font-size: 1.05rem;
            font-weight: bold;
            margin-top: 20px;
            padding: 15px 70px;
            text-align: center;
          }
        }

        .card {
          border-radius: 15px;    
          height: 172px;

          @media screen and (max-width: 600px) {
            display: none;
          }
        }

        .card-mobile {
          border-radius: 15px;
          height: 172px;

          @media screen and (min-width: 600px) {
            display: none;
          }
        }
      }
    }
  }
`

export default LandingSection;
