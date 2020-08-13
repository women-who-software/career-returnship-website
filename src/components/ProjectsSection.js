import React from "react"
import styled from "styled-components"
import siteImage from "../images/tempProjectImage.png"

const Projects = () => (
  <ProjectsWrapper>
    <div className="content">
      <h2>PROJECTS</h2>
      <div className="row">
        <div className="column">
          <img
            className="project-image"
            src={siteImage}
            alt="Cover for Project"
          />
          <h3>CAREER RETURNSHIP WEBSITE</h3>
          <p>
            A very short description describing the project. Project purpose
            statement or tag line.
            <br />
            <br />
            Tools Used: Figma, Adobe Photoshop, Javascript, HTML, CSS, RESTful
            APIs, React, Node.JS, MongoDB
          </p>
          <div className="toggle-buttons">
            <button className="github-button">GITHUB</button>
            <button className="prototype-button">PROTOTYPE</button>
          </div>
        </div>

        <div className="column">
          <img
            className="project-image"
            src={siteImage}
            alt="Cover for Project"
          />
          <h3>CAREER RETURNSHIP WEBSITE</h3>
          <p>
            A very short description describing the project. Project purpose
            statement or tag line.
            <br />
            <br />
            Tools Used: Figma, Adobe Photoshop, Javascript, HTML, CSS, RESTful
            APIs, React, Node.JS, MongoDB
          </p>
          <div className="toggle-buttons">
            <button className="github-button">GITHUB</button>
            <button className="prototype-button">PROTOTYPE</button>
          </div>
        </div>

        <div className="column">
          <img
            className="project-image"
            src={siteImage}
            alt="Cover for Project"
          />
          <h3>CAREER RETURNSHIP WEBSITE</h3>
          <p>
            A very short description describing the project. Project purpose
            statement or tag line.
            <br />
            <br />
            Tools Used: Figma, Adobe Photoshop, Javascript, HTML, CSS, RESTful
            APIs, React, Node.JS, MongoDB
          </p>
          <div className="toggle-buttons">
            <button className="github-button">GITHUB</button>
            <button className="prototype-button">PROTOTYPE</button>
          </div>
        </div>
      </div>
      <button className="project-button">HAVE A PROJECT FOR US?</button>
    </div>
  </ProjectsWrapper>
)

const ProjectsWrapper = styled.div`
  align-items: center;
  background: gray;
  color: #54bbce;
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
    color: #ffffff;
    align-self: center;
    margin-top: 20px;
  }
`

export default Projects
