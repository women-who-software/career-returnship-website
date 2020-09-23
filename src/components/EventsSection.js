import React from "react"
import styled from "styled-components"
import EventBlurb from "../components/EventBlurb"
import meetupInfo from "../images/tempMeetupInfo.png"
import bkgImg from "../images/bkg-img.jpg"

const EventsSection = () => (
  <EventsWrapper>
    <div className="content" style={{ backgroundImage: 'url(' + bkgImg + ')', backgroundSize: "cover" }}>
      <h2>NETWORKING / EVENTS</h2>
      <div className="row">
        <div className="column" >
          <img className="meetup-info" src={meetupInfo} alt="Meetup logo with event information" />
        </div>
        <div className="column">
          <EventBlurb />
          <EventBlurb />
          <EventBlurb />
        </div>
        <div className="column">
          <EventBlurb />
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

    color: #54BBCE;
    display: flex;
    margin: 0;
    flex-direction: column;
    width: 100%;

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  h2 {
    padding-top: 20px;
    font-size: 1.5rem;
  }
}
@media (min-width: 700px) {
  .content{
    margin: 0;
    padding: 0 0 10px 0;
  }


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
.row {
  justify-content: flex-start;

  flex-direction: row;
  margin: 0;
}
.column {

  margin: 0;
  padding: 0;
  max-width: 400px;
  width: 80%;
}
h2 {
  font-size: 2.5rem;
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

export default EventsSection;
