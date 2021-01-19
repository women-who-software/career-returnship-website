import React from "react"
import Styled from "styled-components"

const EventBlurb = (props) => {
  return (
    <EventBlurbWrapper>
      
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.link}>Website</a>
    </EventBlurbWrapper>
  )
}

const EventBlurbWrapper = Styled.div`
    
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 318px;
    height: 148px; 

  h2{
    font-size: 14px;
    font-weight: 700;
    color: #017A8E;
}
   

    p {
      font-family: Montserrat, sans-serif;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #000000;
      margin: 0;
    }
    a {
      color: #017A8E;
      font-size: 12px;
    }

`

export default EventBlurb;