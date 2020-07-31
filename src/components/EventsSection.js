import React from "react"
import Styled from "styled-components"
import EventBlurb from "../components/EventBlurb"
import meetupInfo from "../images/Meetup-info-temp.png"

const Events = () => (
  <EventsWrapper>
    <div className="events">
      <h2>NETWORKING / EVENTS</h2>
      <div className="columns">
        <img clssName="meetup-info" src={meetupInfo} alt="Meetup logo with event information"/>
        <div className="column1">
          <EventBlurb />
          <EventBlurb />
          <EventBlurb />
        </div>
        <div className="column2">
          <EventBlurb />  
          <EventBlurb />
          <EventBlurb />
        </div>
      </div>
      <a className="link-more" href="https://www.meetup.com/Women-Who-Code-Boulder-Denver/events/fnbxtrybckbdc/">view more upcoming events</a>
    </div>
  </EventsWrapper>
)

const EventsWrapper = Styled.div`
  @media (max-width: 700px) {

  }

  .events {
    height: 60vh;
    width: 100%;
    background: gray;
    padding: 20px 300px;
    color: #54BBCE;
    display: flex;
    flex-direction: column;

    .columns {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;

      img {
        border-radius: 15px;
        min-width: 280px;
        margin-right: 30px;
      }

      .column1 {
        min-width: 280px;
        margin-right: 30px;
      }

      .column2 {
        min-width: 280px;
      }
    }
    .link-more {
      text-decoration: none;
      font-family: Montserrat, sans-serif;
      font-weight: bold;
      font-size: 14px;
      line-height: 123.4%;
      letter-spacing: 0.02em;
      color: #FFFFFF;
      align-self: center;
      margin-top: 20px;
    }
  }
`

export default Events;
