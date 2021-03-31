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
        max-width: 50rem;
        padding: 0 1.25rem;
        position: absolute;
        margin: 3.125rem auto;
        width: 80%;
        z-index: 2;
      }
    }
    .about {
          display: none;
          @media (max-width: 43.75rem) {
          display:block;
          margin: 0 auto;
          }
        }
          .kick {
            display: block;
          @media (max-width: 43.75rem) {
          display: none;

          }
}
    .about-us {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0 .9375rem;
      margin: 0 0 3.125rem;
      max-width: 68.75rem;
      width: 100%;

        
      h2 {
        color: #DA0D46;
        font-weight: 600;
        font-size: 2.4rem;
      }

      .row {
        display: flex;
        
        @media (max-width: 43.75rem) {
          align-items: center;
          flex-direction: column;
          width: 100%;
        }

        .column {
          padding-top: 1rem;
          
          @media (max-width: 43.75rem) {
          align-items: center;
          display: flex;
          flex-direction: column;
          }
          
          p {
            color: #000000;
            font-size: 1.2rem;
            letter-spacing: 0.02em;
            width: 100%;
            
            @media (min-width: 43.75rem) {
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
            border-radius: .9375rem;
            border: .0625rem solid #da0d46;
            box-sizing: border-box;
            color: #da0d46;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.05rem;
            font-weight: bold;
            margin-top: 1.25rem;
            padding: .625rem  1.5625rem;
            text-align: center;
            text-decoration: none;
            width: 55%;
          :hover {
            background: #da0d46;
            color: white;
          }
            @media (min-width: 56.25rem) {
              width: 30%;
              margin-left: 15rem;
              
            }
          }
        }

        .card {
          border-radius: .9375rem;
          height: 10.75rem;

          @media screen and (max-width: 37.5rem) {
            display: none;
          }
        }

        .card-mobile {
          border-radius: .9375rem;
          height: 10.75rem;

          @media screen and (min-width: 37.5rem) {
            display: none;
          }
        }
      }
    }
  
`

export default LandingSection
