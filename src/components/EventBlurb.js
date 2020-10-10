import React from "react"
import Styled from "styled-components"

const EventBlurb = (props) => {
  return (
    <EventBlurbWrapper>
      <h3>{props.date} @ {props.time}</h3>
      <h2>{props.title}</h2>

      <p>{props.description}</p>
    </EventBlurbWrapper>
  )
}

const EventBlurbWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 80%;

  h2{
    font-size: 16px;
    font-weight: 700;
    color: #017A8E;
}
    h3 {
      font-family: Myriad Pro, sans-serif;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 400;
      margin: 0px;
      color: #017A8E;
    }

    p {
      font-family: Montserrat, sans-serif;
      font-weight: normal;
      font-size: 12px;
      line-height: 123.4%;
      letter-spacing: 0.02em;
      color: #000000;
      margin: 0px;
    }

`

export default EventBlurb;