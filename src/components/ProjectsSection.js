import React from "react"
import styled from "styled-components"

import Project from "./Project"

const Projects = () => (
  <ProjectsWrapper>

    <div>
      <h2>PROJECTS</h2>
    </div>

    <Project />


    <a className="project-button" href="https://form.jotform.com/203324916543150" target="_blank" rel="noreferrer">HAVE A PROJECT FOR US?</a>

  </ProjectsWrapper>
)

export default Projects
const ProjectsWrapper = styled.div`
  margin-bottom: 2rem;
  height: 102rem;
  text-align: center;
  width: 80%;
  position: relative;
@media (min-width: 43.75rem){
  
  height: 105rem;
}
@media (min-width: 56.25rem){
  width: 80%;
  height: 40rem;
}
  h2{
    color: #DA0D46;
    margin-bottom: 1rem;
  }
 
  .project-button {
      background: linear-gradient(180deg, #DA0D46 0%, #570018 100%), #DA0D46;
      box-shadow: 0rem .25rem .25rem rgba(0, 0, 0, 0.25);
      border-radius: .9375rem;
      font-size: .7rem;
      line-height: 123.4%;
      letter-spacing: 0.02em;
      color: #ffffff;
      align-self: center;
      padding: 1.25rem;
      margin-top: 1.25rem;
      text-decoration: none;
      
      @media (min-width: 43.75rem){

      position: absolute; 
      bottom: 0;
      right: 30%;
      }
      @media (min-width: 56.25rem){
font-size: 1rem;
        right: 28%;
      }
  }
`
