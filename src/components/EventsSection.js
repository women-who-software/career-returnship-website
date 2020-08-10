import React from "react"
import styled from "styled-components"
import EventBlurb from "../components/EventBlurb"
import meetupInfo from "../images/tempMeetupInfo.png"

const EventsSection = () => (
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

const EventsWrapper = styled.div`
  align-items: center;
  background: gray;
  color: #54BBCE;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 900px) {
    text-align: center;
  }

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    padding: 0 20px;
    width: 100%;

    h2 {
    align-self: flex-start;
    font-size: 2.5rem;
    margin: 40px 0;
    width: 100%;
    }  

    .row {
      display: flex;
      margin: 0 0 100px;
      width: 100%;


      .column {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex: 1;
        margin: 0 30px;

        img {
          border-radius: 15px;
        }

        &:first-of-type {
          margin-left: 0;
        }

        &:last-of-type {
          margin-right: 0;
        }
      }
      
      @media screen and (max-width: 900px) {
        align-items: center;
        flex-direction: column;

        .column { 
          margin: 0px;
        }
      }
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

export default EventsSection;
