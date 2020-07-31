import React from "react"
import Styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/project-card"
import Involved from "../components/involved-section"
import Landing from "../components/landing-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Landing />
      <Involved />
      <Events />
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

const Wrapper = Styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 700px) {

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
