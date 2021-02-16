import React from "react"
import styled from "styled-components"

import meetupInfo from "../images/wwcmeet.png"
import bkgImg from "../images/bkg-img.jpg"

import Event from "../components/Event"

export default function EventsSection() {

  return (
    <EventsWrapper EventsWrapper >
      <div className="content" style={{ backgroundImage: 'url(' + bkgImg + ')', backgroundSize: "cover" }}>
        <h2 className="title_Page">NETWORKING / EVENTS</h2>
        <div className="row">
          <div className="column" >
            <img className="meetup-info" src={meetupInfo} alt="Meetup logo with event information" />

          </div>

          <eventItem>
            <Event />
          </eventItem>

        </div>
        <a className="link-more" href="eventsPage">view more upcoming events</a>
      </div>
    </EventsWrapper>
  )
}

const EventsWrapper = styled.div`
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
  background: #fff;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 2rem;
  width: 100%;
}
.join-button{
    text-transform: uppercase;
    font-weight: 700;
    font-size:.8rem;
    text-decoration: none;
    background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    color: #fff;
    padding: .5rem;
  }
  a {
    color: white;
  }
  @media (min-width: 700px) {
    .content {
      
      padding: 2rem;
    }
   eventItem{
     display: flex;
     flex-wrap: wrap;
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
    margin-left: 6rem;
    width: 30%;
    padding: 2rem;
  }
  
.join-button{
padding: 1rem;
}
  }
`


