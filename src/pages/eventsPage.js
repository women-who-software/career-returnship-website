import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import meetupInfo from "../images/tempMeetupInfo.png"
import defaultEvents from '../components/defaultEvents'
import EventBlurb from "../components/EventBlurb"


export default function EventsPage() {
    const eventItems = defaultEvents.map(event => <EventBlurb key={event.id} date={event.date} time={event.time} title={event.title} link={event.link} description={event.description} />)

    return (
        <Layout>
            <SEO title="Events" />
            < EventStyles >
                <h1 >Networking/Events</h1>
                <div className="row">
                    <div className="column" >
                        < img className="meetup-info" src={meetupInfo} alt="Meetup logo with event information" />
                        <a className="join-button" href="https://www.meetup.com/Women-Who-Code-Boulder-Denver">Join Us</a>
                    </div >

                    <div className="eventItem">
                        {eventItems}
                    </div>
                </div>
            </ EventStyles>

        </Layout >
    )

}


const EventStyles = styled.div`
    background: #DA0D46;
    margin: 0;
    padding: 0 20px;
    width: 100%;
h1{
    color: #ffff;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    padding: 10px 0;
    text-align: center;
}
  .row {
      margin: 0;
      width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
  }
      .join-button {
        background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
        border-radius: 15px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: #FFFFFF;
        text-transform: uppercase;
        text-align: center;
        text-decoration: none;
        height: 45px;
        display: flex;
        align-content: center;
        justify-items: center;
        padding: 10px 60px;
        outline: none;
        width: 80%;
        margin: 0 20px;
      }
      a {
          text-align: center;
      }
    .eventItem {
        margin-left: 60px;
        padding-top: 20px;
        width: 100%;
    }
    @media(min-width: 700px) {
        .row{
        flex-direction: row;
        margin-left: 50px;
        padding-bottom: 50px;
        }
        .join-button {
            padding: 10px 40px;
        }
    }
    `;
