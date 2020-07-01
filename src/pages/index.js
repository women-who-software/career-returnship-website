import React from "react"
import { PageProps, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <div className="career-returnship">
        <img />
        <h1>CAREER RETURNSHIP</h1>
      </div>
      <div className="about-us"></div>
      <div className="get-involved"></div>
      <div className="events"></div>
      <div className="projects"></div>
    </Wrapper>
  </Layout>
)

{/* DECLARE YOUR COMPONENT AS A STYLED DIV HERE */}

const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  .career-returnship {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 570px;
    width: 100%;
    background: linear-gradient(0deg, #4C4C4C, #4C4C4C), url(Hero-img.jpg);
    background-blend-mode: multiply, normal;

    
    img {
      height: 120px;
      margin-right: 5px;
    }

    h1 {
      font-family: "Montserrat";
      font-size: 2rem;
      font-weight: normal;
      letter-spacing: 0.02em;
      color: #FFFFFF;
    }
  }
`

export default IndexPage;