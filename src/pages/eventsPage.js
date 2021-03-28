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
      <EventStyles>
        <h2 >Networking/Events</h2>

        <div className="column">
          < img className="meetup-info" src={meetupInfo} alt="Meetup logo with event information" />
          <a className="join-button" href="https://www.meetup.com/Women-Who-Code-Boulder-Denver" target="_blank" rel="noreferrer">RSVP to the Next Event</a>
        </div>
        <div className="content">
          <Event />


        </div>

      </ EventStyles>

    </Layout >
  )

}
export default EventsPage

const EventStyles = styled.div`
    background: #DA0D46;
    padding: 2rem 0;
    position: relative;
    @media (min-width: 56.25rem) {
      height: 40rem;
      width: 100%;
    }
  h2 {
      color: white;
      text-align: center;
      text-transform: uppercase;
    }
  .meetup-info{
    background: white;
    border-radius: .625rem;
    padding: .8rem;
    
    width: 90%;
    @media (min-width: 43.75rem) {
      width: 50%;
    }
    @media (min-width: 56.25rem){
      width: 80%;
      margin-top: 2rem;
    }
  }
  .column {
    margin: 2rem 0;
    padding-left: 2rem;
    
    @media (min-width: 43.75rem) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 70%;
      margin: 3rem auto;
    }
    @media (min-width: 56.25rem){
      width: 18rem;
      padding-right: 1rem;
      margin: 0 2rem;
    }
  }
  .content {
    position: relative;
    top: 2%;
    left: 1%;
    margin:0;
    @media (min-width: 43.75rem) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    @media (min-width: 56.25rem){    
      margin-left: 24rem;
      margin-top: -20rem;
      width: 60%;
}
    }
    a {
      margin: 0 0 0 2.5rem;
      @media (min-width: 43.75rem){
        margin: 0;
      }
    }
  .join-button{
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size:.8rem;
    text-decoration: none;
    background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
    box-shadow: 0rem .25rem .25rem rgba(0, 0, 0, 0.25);
    border-radius: .9375rem;
    color: #fff;
    padding: 1rem .8rem;
   @media (min-width: 43.75rem){
        width: 50%;
      }
      @media (min-width: 56.25rem){
        font-size: 0.6rem;
        width: 80%;
        
      }
  }
  
  
  
`



