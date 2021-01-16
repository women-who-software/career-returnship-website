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
                        <a className="join-button" href="https://www.meetup.com/Women-Who-Code-Boulder-Denver">RSVP to the Next Event</a>
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
    margin: 0;
    width: 100%;
    color: #fff;
    background: #DA0D46;
    height: 100%;
    text-align: center;
    padding: 2rem 0;
  
  .column {
    margin-left: o auto;
    padding-bottom: 1rem;
  }
.meetup-info {
  padding-top: 2rem;
    width: 70%;
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
  @media (min-width: 700px) {
   
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
    
  }
  .eventItem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
   
}
.join-button{
padding: 1rem;
}

  }
  
`
