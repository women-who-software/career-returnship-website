import React from "react"
import styled from "styled-components"

const ProjectCard = () => {
  return (
    <ProjectCardWrapper>
      <img className="project-image" src="" alt="Photo describing project" />
      <h3>CAREER RETURNSHIP WEBSITE</h3>
      <p>Description of project dolor sit met consectetur adipiscing elitsed do eiusmod tempor</p>
      <p>Tools Used: Gatsby, React, Node, Yarn, Styled Components</p>
      <div className="github-buttons">
        <button>GITHUB</button>
        <button>PROTOTYPE</button>
      </div>
    </ProjectCardWrapper>
  )
}

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 10px 10px;
  color: black;

  image {

  }

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

export default ProjectCard;