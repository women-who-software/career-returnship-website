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
      <h2 className="page_title">WANT TO GET INVOLVED?</h2>
      <div className="row">
        <div className="column">
          <a className="become-member-button" type="button"  rel="noreferrer" href="https://form.jotform.com/203243227290043" target="_blank">
            BECOME A MEMBER
          </a>
          <p>
            We meet every 2 weeks on Wednesday. <br />
            <br /> 6:00-8:00pm

          </p>
        </div>
        <div className="column">
         <a className="become-sponsor-button" type="button"  rel="noreferrer" href="https://form.jotform.com/203324916543150" target="_blank">BE A SPONSOR/VOLUNTEER</a>
            
      
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
  background: #DA0D46;
  color: #ffffff;
  width: 100%;


  .content {
   
    flex-direction: column;
    padding-top: 2rem;
    width: 100%;  
    @media (min-width: 700px) {
      display: flex;
      margin: 0;
      width: 100%;
    }
  }
.page_title {
 margin-left: 1rem;
 font-size: 1.4rem;
  @media (min-width: 700px) {
  margin-left: 20rem;
  }
}
  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 80%;



    .column {
      align-items: center;
      display: flex;
      padding-bottom: 1rem;
      flex-direction: column;
      margin: 0;
      text-align: justify;
      width: 80%;
    }
    @media(min-width: 700px) {
        margin-left: 12rem;
        flex-direction: row;
        width: 70%;
      }
    p{
      font-size: .8rem;
     
      
      @media(min-width: 700px) {
      text-align: justify;
      padding-top: 2rem;
      padding-left:2rem;
      margin: 0 7rem;
      width: 80%;
     
    }
    
    }

     .become-member-button {
        
        background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
        border-radius: 15px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: #FFFFFF;
        padding: .2rem .5rem;
        outline: none;
        width: 70%;
        text-decoration: none;
        
        
        @media ( min-width: 700px) {
          padding: .5rem .2rem;
          margin: 0 ;
          width: 65%;
          text-align: center;
      }
      }
      
      .become-sponsor-button {
        font-size: 15px;  
        border-radius: 15px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-decoration: none;
        line-height: 123.4%;
        margin: 0 0 30px;
        outline: none;
        padding: .5rem 0;
        width: 80%;

      @media ( min-width: 700px) {
        display: flex;
        padding: .5rem 1.2rem;
        font-weight: 700;
        font-size: 16px;
        font-family: Myriad Pro, sans-serif;
        color: #4C4C4C;
        margin: 0;
        text-align: center;
        align-items: center;
        width: 75%;
        height: 52px;
        background: linear-gradient(180deg, #FFFFFF 0%, #E9CFD6 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
      }
    }

      .logos {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin: 0 0 30px 0;
        padding-top: 20px;
        width: 95%;

        img {
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          height: 40px;
          /* margin: 0 5px 5px; */
          overflow: hidden;
          width: 125px;
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
        margin-right: 18px;
        font-size: .9rem;
        padding: 0 0 0 10px;
        text-align: justify;
      } 
    }
  
`

export default InvolvedSection;