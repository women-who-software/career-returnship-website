import React from "react"
import Styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Involved from "../components/InvolvedSection"
import Landing from "../components/LandingSection"
import Events from "../components/EventsSection"
import Projects from "../components/ProjectsSection"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Landing />
      <Involved />
      <Events />
      <Projects />

    </Wrapper>
  </Layout>
)

const Wrapper = Styled.div`
align-items: center;
display: flex;
flex-direction: column;
width: 100%;
`

export default IndexPage;
