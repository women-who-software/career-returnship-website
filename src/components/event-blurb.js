import React from "react"
import styled from "styled-components"

const EventBlurb = () => {
  return (
    <EventBlurbWrapper>
      <h3>DATE - EVENT TITLE - 6PM</h3>
      <p>Description of event dolor sit met consectetur adipiscing elitsed do eiusmod tempor</p>
    </EventBlurbWrapper>
  )
}

const EventBlurbWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 10px 10px;
    margin-bottom: 10px;

    h3 {
      font-family: Myriad Pro, sans-serif;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;
      margin: 0px;
    }

    p {
      font-family: Montserrat, sans-serif;
      font-weight: normal;
      font-size: 14px;
      line-height: 123.4%;
      letter-spacing: 0.02em;
      color: #000000;
      margin: 0px;
    }
`

export default EventBlurb;