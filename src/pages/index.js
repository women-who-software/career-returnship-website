import React from "react"
import { PageProps, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      Hello Kate and Christine and Rafna and Jen and Finn! <br />
      The header and footer are controlled by Layout.js <br />
      {/* YOUR CODE HERE */}
    </Wrapper>
  </Layout>
)

{/* DECLARE YOUR COMPONENT AS A STYLED DIV HERE */}

const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* max-width: ; */
  padding: 100px 0px 55px;
  width: 100%;
`

export default IndexPage;