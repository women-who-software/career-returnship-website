import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
import Slider from "../components/Testimonials"


const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects by Career Returnship" />
      <ProjectStyle>
        <h2>PROJECTS</h2>
        <div className="content">
          <Project />
          <a className="project-button" href="https://form.jotform.com/203324916543150" target="_blank" rel="noreferrer">HAVE A PROJECT FOR US?</a>
        </div>

        <Slider className="slider" />
      </ProjectStyle>

    </Layout>

  )
}

const ProjectStyle = styled.div`
text-align: center;
margin: 0 1rem;

  h2{
    color: #DA0D46;
  }
  @media (min-width: 43.75rem) {
  margin: 2rem 2rem;
  }

  @media (min-width: 56.25rem) {
    height: 85rem;
    margin-top: 2rem;
    margin-bottom: 24rem;
    margin-left: 7rem;
    width: 80%;
  }


.project-button {
      background: linear-gradient(180deg, #DA0D46 0%, #570018 100%), #DA0D46;
      box-shadow: 0px .25rem .25rem rgba(0, 0, 0, 0.25);
      border-radius: .9375rem;
      font-size: 1rem;
      line-height: 123.4%;
      letter-spacing: 0.02em;
      color: #ffffff;
      align-self: center;
      padding: 1.25rem;
      margin-top: 1rem;
      text-decoration: none;

      @media (min-width: 56.25rem){
        right: 38%;
        margin-bottom: 2rem;
        margin-top: 0;
      }
    }  
      
`

export default ProjectsPage

