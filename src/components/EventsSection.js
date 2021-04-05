import React from "react"
import styled from "styled-components"

import meetupInfo from "../images/wwcmeet.png"
import bkgImg from "../images/bkg-img.jpg"

import Event from "../components/Event"

export default function EventsSection() {

  return (
    <EventsWrapper EventsWrapper style={{ backgroundImage: 'url(' + bkgImg + ')', backgroundSize: "cover" }}>
      <h2 className="title_Page">NETWORKING / EVENTS</h2>

      <img className="meetup-info" src={meetupInfo} alt="Women Who Code and Meetup" />
      <div className="content">



        <Event />
      </div>




      <a className="link-more" href="eventsPage">view more upcoming events</a>

    </EventsWrapper>
  )
}

const EventsWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    color: #fff;
    background: #DA0D46;
    height: 100%;
    text-align: center;
    padding: 2rem 0;
    position: relative;
    
  h2{
    color: #54BBCE;
  }
 
.meetup-info {
  background: #fff;
  border-radius: .625rem;
  margin-top: 1rem;
  padding: .5rem; 
  width: 80%;
@media (min-width: 43.75rem) {
  width: 50%;
}
@media (min-width: 56.25rem){
  width: 20%;
  position: absolute;
  margin: 0 6rem;
  left: 0;
  top: 18%;
  
}
}

  a {
    color: white;
    font-weight: 700;
    text-decoration: none;
  }
  .content {

    margin: 0 .5rem;
    @media (min-width: 43.75rem) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      
    }
    @media (min-width: 56.25rem) {
      left: 10%;
      position: relative;
      width: 80%;
      max-width: 68.75rem;
      
    }
  }
`


