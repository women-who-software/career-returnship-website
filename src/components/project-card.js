import React from "react"
import styled from "styled-components"

const ProjectCard = () => {
  return (
    <ProjectCardWrapper>
      <img className="project-image" src="" alt="Cover for Project" />
      <h3>CAREER RETURNSHIP WEBSITE</h3>
      <p>A very short description describing the project.  Project purpose statement or tag line.<br /><br />
        Tools Used: Figma, Adobe Photoshop, Javascript, HTML, CSS, RESTful APIs, React, Node.JS, MongoDB
      </p>
      <div className="toggle-buttons">
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
  margin: 0px 10px;
  color: black;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;

  img {
    background: #017A8E;
    border-radius: 15px 15px 0px 0px;
    width: 272px;
    height: 170px;
    margin: 8px;
  }


  h3 {
    font-family: Myriad Pro, sans-serif;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
    display: flex;
    justify-content: center;
    width: 272px;
    height: 20px;
  }

  p {
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 123.4%;
    letter-spacing: 0.02em;
    text-align: center;
    color: #000000;
    margin: 0px;
  }

  .toggle-buttons {
    padding: 20px;
  }
}
`

export default ProjectCard;