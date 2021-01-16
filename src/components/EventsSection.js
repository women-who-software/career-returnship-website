import React from "react"
import styled from "styled-components"
import EventBlurb from "../components/EventBlurb"
import meetupInfo from "../images/tempMeetupInfo.png"
import bkgImg from "../images/bkg-img.jpg"
import defaultEvents from '../components/defaultEvents'

export default function EventsSection() {
  const eventItems = defaultEvents.map(event => <EventBlurb key={event.id} date={event.date} time={event.time} title={event.title} link={event.link} description={event.description} />)
  return (
    < EventsWrapper >
      <div className="content" style={{ backgroundImage: 'url(' + bkgImg + ')', backgroundSize: "cover" }}>
        <h2 className="title_Page">NETWORKING / EVENTS</h2>
        <div className="row">
          <div className="column" >
            <img className="meetup-info" src={meetupInfo} alt="Meetup logo with event information" />

          </div>
          <div className="eventItem">
            {eventItems}
          </div>

        </div>
        <a className="link-more" href="eventsPage">view more upcoming events</a>
      </div>
    </  EventsWrapper>
  )
}

const EventsWrapper = styled.div`
    margin: 0;
    width: 100%;
    color: #54BBCE;
  
  .row {
    text-align: center;
  }
.title_Page {
  text-align: center;
  padding-top: 1rem;
}
  @media (min-width: 700px) {
   
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .column {
   
    margin-left: 6rem;
    
  }
  .eventItem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
  }
  
   
}

  }
  .link-more{
    margin-left: 2rem;
    font-size: .7rem;
    text-decoration: none;
    color: white;
    @media (min-width: 700px) {
      margin: 0 25rem;
    }
   
  
`


