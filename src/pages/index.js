import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EventBlurb from "../components/event-blurb"
import ProjectCard from "../components/project-card"
import Involved from "../components/involved-section"
import Landing from "../components/landing-section"
import meetupInfo from "../images/Meetup-info-temp.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Landing />
      <Involved />
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
      <div className="projects">
        <h2>PROJECTS</h2>
        <div className="projects-button">
          <div className="cards">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
          <button className="project-button">HAVE A PROJECT FOR US?</button>
        </div>
      </div>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

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

  .projects {
    height: 85vh;
    width: 100%;
    background: #FFFFFF;
    padding: 20px 300px;
    color: #DA0D46;

    h2 {

    }

    .projects-button {
      display: flex;
      flex-direction: column;
      align-items: center;
    
      .cards {
        display: flex;
      }

      .project-button {
        font-family: Myriad Pro, sans-serif;
        font-weight: bold;
        font-size: 16px;
        display: flex;
        align-items: center;
        text-align: center;
        background: #DA0D46;
        color: #FFFFFF;
        padding: 15px 35px;
        margin-top: 50px;
        margin-bottom: 50px;

        background: linear-gradient(180deg, #DA0D46 0%, #000000 100%), #4C4C4C;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
      }
    }
  }
`

export default IndexPage;
