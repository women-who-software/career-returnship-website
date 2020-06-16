// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = (props: PageProps) => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <h1>ABOUT US</h1>
      <div className="columns">
        <div className="column">
          <p>
            Kickstarting your career and reentering the workforce after a break
            can be a huge challenge; together we can make this a lot easier.
            This initiative is a small step towards empowering those of us in
            technology trying to relaunch our careers. Join us in this biweekly
            event series where we learn, network, engage in
          </p>
        </div>
        <div className="column">
          <p>
            meaningful projects and crack the interviews together. Who should
            attend: If you are thinking about restarting your career or
            currently struggling alone in the process, this program is for you.
            If you are currently working, we would love your insights to help
            the community
          </p>
        </div>
        <div className="column">
          <img alt="" src="" />
          <button type="button">WOMEN WHO CODE</button>
          <button type="button">WWC - DENVER/BOULDER</button>
          <button type="button">CONTACT US</button>
        </div>
      </div>
      <button type="button">FIND OUR NEXT MEETING</button>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 825px;
  padding: 100px 0 55px;
  width: 100%;

  h1 {
    color: red;
    text-align: left;
    width: 100%;
  }

  .columns {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .column {
      align-items: center;
      display: flex;
      flex-direction: column;

      p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 123.4%;
        /* or 22px */

        letter-spacing: 0.02em;
      }

      img {
      }

      button {
      }
    }
  }

  button {
  }
`

export default AboutUs
