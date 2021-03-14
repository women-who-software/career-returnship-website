import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
import Slider from "../components/Testimonials"


const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectStyle>
        <h2>PROJECTS</h2>
        <div className="content">
          <Project />
          <a className="project-button" href="https://form.jotform.com/203324916543150">HAVE A PROJECT FOR US?</a>
        </div>

        <Slider className="slider" />
      </ProjectStyle>

    </Layout>

  )
}

const ProjectStyle = styled.div`
text-align: center;
margin: 0 2rem;
position: relative;

@media (min-width: 700px) {
margin: 2rem 2rem;
height: 80rem;
}
@media (min-width: 900px) {
  height: 85rem;
  margin: 0 auto;
  width: 80%;
}
h2{
  color: #DA0D46;
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
      padding: 1.25rem;
      margin-top: 1.25rem;
      text-decoration: none;

      @media (min-width: 700px){

      position: absolute;
      bottom: 45%;
      right: 30%;
      }
      @media (min-width: 900px){
        right: 38%;
        margin: .8rem;
      }
    }  
      
`

export default ProjectsPage

