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
              <br />Sign up online with Meetup
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
          <p className="thank-you">Thank you sponsors!</p>
        </div>
      </div>
    </div>
  </InvolvedWrapper>
)

const InvolvedWrapper = Styled.div`
  @media (max-width: 700px) {

  }

  .get-involved {
      height: 54vh;
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
        justify-content: space-between;

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

          ul {
            list-style-type:circle;
            font-size: 14px;
            color: white;
            line-height: 5px;
            font-family: Montserrat, sans-serif;
            letter-spacing: 0.02em;
          }
        }

        .column3 {
          min-width: 280px;
      
          .logo {
            /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
            border-radius: 5px;
            /* padding: 7px 15px; */
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
  }
`

export default InvolvedSection;