// Gatsby supports TypeScript natively!
import React from "react"
import Styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <div>Hello World</div>
    </Wrapper>
  </Layout>
)

const Wrapper = Styled.div`
align-items: center;
display: flex;
flex-direction: column;
width: 100%;
`

export default AboutPage
