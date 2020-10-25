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
        <h2>NETWORKING / EVENTS</h2>
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
    align-items: center;
    display: flex;
    margin: 0;
    flex-direction: column;
    width: 100%;
    color: #54BBCE;

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  h2 {
    
    margin: 0;
    padding: 10px 0;
    font-size: 1.2rem;
  }


    .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 100 %;

    .column {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 80%;
      img {
        border-radius: 15px;
      }
 
    }
    .eventItem {
     margin: 0 30px;
      width: 100%;
    }
    .eventItem P {
      padding: 10px 0;
    }
    
    }

  .link-more {
  text-decoration: none;
  font-family: Montserrat, sans - serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 123.4 %;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  align-self: center;
  margin-top: 20px;
}

@media (min-width: 700px) {
  
  .content h2 {
  font-size: 1.2rem;
  margin: 0;
  
}
.eventItem h2, .eventItem h3 {
  width: 80%;
}
.eventItem p{
  width: 80%;
}
.row {
  justify-content: flex-start;
  flex-direction: row;
  margin: 0;
  padding-left: -90px;
  width: 100%
}
.column {
align-items: flex-end;
  margin: 0;
  padding: 0;
  
  width: 40%;
}
.blurb {
  display: flex;
  flex-wrap: wrap;
  width: 415px;
}
.meetup-info {
  margin: 0 60px 0 0;
  padding: 0;

}
.meetup-info img {
  margin: 0;
}

}

`


