import React from "react"
import styled from "styled-components"
import ProjectCard from "../components/ProjectCard"

const Projects = () => (
  <ProjectsWrapper>
    <div className="content">
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
  </ProjectsWrapper>
)

const ProjectsWrapper = styled.div`
  align-items: center;
  background: #FFFFFF;
  color: #DA0D46;
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

      .projects-button {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 0 0 100px;
        width: 100%;

        .cards {
          display: flex;
          margin: 0 0 50px;
          width: 100%;
        
          @media screen and (max-width: 900px) {
           flex-flow: row wrap;
          }      
        }

        /* NEXT: flex flow needs to be row wrap for responsiveness but it makes the desktop version all weird
         */

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
  }
`

export default Projects;
