import React from "react"
import Styled from "styled-components"
import EventBlurb from "../components/EventBlurb"
import meetupInfo from "../images/tempMeetupInfo.png"

const Events = () => (
  <EventsWrapper>
    <div className="content">
      <h2>NETWORKING / EVENTS</h2>
      <div className="row">
        <div className="column">
          <img className="meetup-info" src={meetupInfo} alt="Meetup logo with event information"/>
        </div>
        <div className="column">
          <EventBlurb />
          <EventBlurb />
        </div>
        <div className="column">
          <EventBlurb />
          <EventBlurb />
        </div>
      </div>
      <a className="link-more" href="https://www.meetup.com/Women-Who-Code-Boulder-Denver/events/fnbxtrybckbdc/">view more upcoming events</a>
    </div>
  </EventsWrapper>
)

const EventsWrapper = Styled.div`
  align-items: center;
  background: gray;
  color: #54BBCE;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 900px) {

  }

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
`

export default Events;
