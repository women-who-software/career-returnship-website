import React from "react"
import styled from "styled-components"
import project1 from "../images/tempProjectImage1.png"
import project2 from "../images/tempProjectImage2.png"
import project3 from "../images/tempProjectImage3.png"

const Projects = () => (
  <ProjectsWrapper>
    <div className="content">
      <h2>PROJECTS</h2>
      <div className="row">
        <div className="column">
          <img
            className="project-image"
            src={project1}
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
            src={project2}
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
            src={project3}
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
  background: #E5E5E5;
  color: #DA0D46;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  padding-left: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 700px) {

    margin: 0 auto;
  }

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 20px 0;
    width: 100%;

    h2 {
     text-align: center;
      font-size: 2.5rem;
      margin-left: 50px; 
      width: 100%;
    }

    .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
      width: 100%;

      .column {
        align-items: center;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        margin: 20px auto;
        padding-bottom: 20px;
        text-align: center;
        width: 80%;

        img {
        border-radius: 15px 15px 0px 0px;
        object-fit: contain;
        width: 100%;
        }
        p, h3 {
         color: #000000;
         padding: 20px;
        }
        h3 {
          font-size: 16px;
          margin: 0;
          padding: 0;
        }
      }

      @media screen and (min-width: 700px) {
        align-items: center;
        flex-direction: row;

        .column {
          margin: 20px 0 0 50px;
          max-width: 400px;
          width: 100%;
        }
      }
    }
  }

  .project-button {
    background: linear-gradient(180deg, #DA0D46 0%, #570018 100%), #DA0D46;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-size: 16px;
    line-height: 123.4%;
    letter-spacing: 0.02em;
    color: #ffffff;
    align-self: center;
    padding: 20px;
  }
`

export default Projects
