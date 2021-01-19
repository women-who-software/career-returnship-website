// Node modules.
import React from 'react'
import styled from 'styled-components'
// Relative imports.
import card from '../images/wwcCard.png'
import hero from '../images/heroSubtract.png'
import logo from '../images/logoWhite.svg'

const LandingSection = () => (
  <LandingWrapper>
    <div className="hero">
      <img className="hero-image" src={hero} alt="background" />
      <img className="logo" src={logo} alt="WWC Returnship icon" />
    </div>
    <div className="about-us">
      <h2 className="kick">KICKSTARTING YOUR CAREER?</h2>
      <h2 className="about">About Us</h2>
      <div className="row">
        <div className="column">
          <p>
            Re-entering the workforce after a break can be a huge challenge;{' '}
            <strong>together we can</strong> make this a lot easier. This initiative is a small step towards empowering
            those of us in technology as we relaunch our careers.
          </p>
          <img alt="WWC Returnship ad" className="card-mobile" src={card} />
          <a className="button" type="button" href="/about">LEARN MORE</a>
        </div>
        <img alt="WWC Returnship ad" className="card" src={card} />
      </div>
    </div>
  </LandingWrapper>
)

const LandingWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    width: 100%;

    .hero {
      align-items: flex-start;
      background: #ffffff;
      display: flex;
      justify-content: center;
      width: 100%;

      .hero-image {
        background-position: center;
        background-size: cover;
        width: 100%;
        z-index: 1;
      }

      .logo {
        max-width: 800px;
        padding: 0 20px;
        position: absolute;
        margin: 50px auto;
        width: 80%;
        z-index: 2;
      }
    }
    .about {
          display: none;
          @media (max-width: 700px) {
          display:block;
          margin: 0 auto;
          }
        }
          .kick {
            display: block;
          @media (max-width: 700px) {
          display: none;

          }
}
    .about-us {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0 15px;
      margin: 0 0 50px;
      max-width: 1100px;
      width: 100%;

        
      h2 {
        color: #DA0D46;
        font-weight: 600;
        font-size: 2.4rem;
      }

      .row {
        display: flex;
        
        @media (max-width: 700px) {
          align-items: center;
          flex-direction: column;
          width: 100%;
        }

        .column {
          padding-top: 1rem;
          
          @media (max-width: 700px) {
          align-items: center;
          display: flex;
          flex-direction: column;
          }
          
          p {
            color: #000000;
            font-size: 1.2rem;
            letter-spacing: 0.02em;
            width: 100%;
            
            @media (min-width: 700px) {
            margin-left: 0;
            width: 90%;
            strong {
              font-style: italic;
            }
          }
          }

          .button {
            align-self: center;
            background: #ffffff;
            border-radius: 15px;
            border: 1px solid #da0d46;
            box-sizing: border-box;
            color: #da0d46;
            display: flex;
            font-size: 1.05rem;
            font-weight: bold;
            margin-top: 20px;
            padding: 10px  25px;
            text-align: center;
            text-decoration: none;
            width: 25%;
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
  
`

export default LandingSection
