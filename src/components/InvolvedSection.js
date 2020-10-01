//node modules
import React from "react"
import styled from "styled-components"
//relative imports
import nanno from "../images/sponsorNanno.png"
import snapdocs from "../images/sponsorSnapdocs.png"
import workability from "../images/sponsorWorkability.png"
import namecom from "../images/sponsorName.png"
import radial from "../images/sponsorRadial.png"

const InvolvedSection = () => (
  <InvolvedWrapper>
    <div className="content">
      <h2>WANT TO GET INVOLVED?</h2>
      <div className="row">
        <div className="column">
          <button className="become-member-button" type="button">
            BECOME A MEMBER
          </button>
          <p>
            We meet every 2 weeks on Wednesday. <br />
            <br /> 6:00-8:00pm

          </p>
        </div>
        <div className="column">
          <button className="become-sponsor-button" type="button">
            BE A SPONSOR/VOLUNTEER
          </button>
          <p>Interested in partnering with us? A few options we are currently looking to fill. </p>
          <ul>
            <li>Weekly Food Sponsors</li>
            <li>Host Mock Interviews</li>
            <li>Lead a Code Challenge</li>
            <li>Portfolio/Resume Review</li>
            <li>Lightening Talks</li>
            <li>Domain Sponsorship</li>
            <li>Donations</li>
          </ul>
        </div>
        <div className="column">
          <div className="logos">
            <img className="logo" src={nanno} alt="Nanno logo" />
            <img className="logo" src={snapdocs} alt="Snapdocs logo" />
            <img className="logo" src={workability} alt="WWC Returnship ad" />
            <img className="logo" src={namecom} alt="WWC Returnship ad" />
            <img className="logo" src={radial} alt="WWC Returnship ad" />
          </div>
          <p className="thank-you">Thank you Sponsors!</p>
        </div>
      </div>
    </div>
  </InvolvedWrapper>
)

const InvolvedWrapper = styled.div`
  align-items: center;
 
  background: #DA0D46;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 700px) {
    align-items: flex-start;

  }

  .content {
    align-items: center;
    
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }
  @media (min-width: 700px) {
    max-width: 100%;
  }

  h2 {
    align-self: flex-start;
    font-size: 1.5rem;
    margin: 40px 0;
    text-align: center;
    width: 100%;
  }

  .row {
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    width: 100%;



    .column {
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 100%;

      text-align: justify;
    }
      @media(min-width: 700px) {
        align-items: space-between;
      margin-left: 50px;
        flex-direction: row;
      }
    p{
      text-align: justify;
      padding-top: 10px;
      width: 70%;
      @media ( min-width: 700px) {
        width: 80%;

      }
    }

      .become-member-button {
        align-items: center;
        background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
        border-radius: 15px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: #FFFFFF;
        display: flex;
        height: 45px;
        justify-content: center;
        margin: 0 auto;
        padding: 0;
        outline: none;
        width: 60%;
        @media ( min-width: 700px) {
        width: 80%;

      }
      }

      .become-sponsor-button {
        align-items: center;
        background: linear-gradient(180deg, #ffffff 0%, #e9cfd6 100%);
        border-radius: 15px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: #4c4c4c;
        display: flex;
        font-size: 16px;
        height: 45px;
        justify-content: center;
        line-height: 123.4%;

        margin: 0 0 30px;
        outline: none;
        width: 60%;

      @media ( min-width: 700px) {
        padding: 0;
        margin: 0;
        width: 80%;

      }
    }

      .logos {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin: 0 0 30px;
        padding-top: 20px;
        width: 80%;

        img {
          height: 40px;
          margin: 0 0 5px;
          overflow: hidden;
          width: 115px;
        }
      }

      .thank-you {
        font-size: 1.5rem;
        font-family: Noteworthy;
      }

      ul {
        margin: 0;
      }

      li {
        list-style-type: '□';
        margin-right: 20px;

        padding: 0 0 0 10px;
        text-align: justify;
      }
    }
    @media (min-width: 700px) {

      margin: 0 auto;




  }
`

export default InvolvedSection;