import React from "react"
import Styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Involved from "../components/involved-section"
import Landing from "../components/landing-section"
import Events from "../components/events-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Landing />
      <Involved />
      <Events />
    </Wrapper>
  </Layout>
)

const Wrapper = Styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default IndexPage;
