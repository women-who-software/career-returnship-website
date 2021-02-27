import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import meetupInfo from "../images/wwcmeet.png"
import Event from "../components/Event"


const EventsPage = () => {

  return (
    <Layout>
      <SEO title="Events" />
      < EventStyles >
        <h1 >Networking/Events</h1>
        <div className="row">
          <div className="column" >
            < img className="meetup-info" src={meetupInfo} alt="Meetup logo with event information" />
            <a className="join-button" href="https://www.meetup.com/Women-Who-Code-Boulder-Denver" target="_blank" rel="noreferrer">RSVP to the Next Event</a>
          </div >


          <eventItem>
            <Event />
          </eventItem>


        </div>
      </ EventStyles>

    </Layout >
  )

}


const EventStyles = styled.div`
    margin: 0;
    width: 100%;
    color: #fff;
    background: #DA0D46;
    height: 100%;
    text-align: center;
    padding: 2rem 0;
  
  .column {
    margin-left: 1rem;
    padding-bottom: 1rem;
  }
.meetup-info {
  background: white;
  border-radius: 10px;
  margin: 2rem 1rem 0 ;
  padding: 2rem;
  width: 90%;
}
.join-button{
    text-transform: uppercase;
    font-weight: 700;
    font-size:.5rem;
    text-decoration: none;
    background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    color: #fff;
    padding: .5rem;
    margin-top: .5rem;
  }
  @media (min-width: 700px) {
   eventItem{
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     
   }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
  }
  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 2rem;
    width: 30%
  }
  
.join-button{
padding: 1rem;
}
  }
`

export default EventsPage

