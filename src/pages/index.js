import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Logo - white.svg"
import card from "../images/WWC-card.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <div className="landing">
        <div className="career-returnship">
          <img src={logo} alt="WWC Returnship icon" width="500" height="600"/>
        </div>
        <div className="about-us">
          <h2>ABOUT US</h2>
          <div className="description">
            <div className="column">
              <p>Kickstarting your career and re-entering the workforce after a break can be a huge challenge; <span>together we can make this a lot easier</span>. This initiative is a small step towards empowering those of us in technology trying to relaunch our careers.</p>
              <button>LEARN MORE</button>
            </div>
            <img src={card} alt="WWC Returnship ad" />
          </div>
        </div>
      </div>  
      <div className="get-involved"></div>
      <div className="events"></div>
      <div className="projects"></div>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  .landing {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;

    .career-returnship {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 50vh;
      width: 100%;
      background: linear-gradient(0deg, #4C4C4C, #4C4C4C), url(Hero-img.jpg);
      background-blend-mode: multiply, normal;

      img {
        width: 750px;
        height: 172px;
      }

      h1 {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        font-weight: lighter;
        letter-spacing: 0.02em;
        color: #FFFFFF;
      }
    }

    .about-us {
      display: flex;
      flex-direction: column;
      max-width: 900px;
      align-items: flex-start;
      justify-content: center;
      margin-left: 200px;

      h2 {
        color: #DA0D46;
        font-family: Myriad Pro, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 42px;
        letter-spacing: 0.02em;
      }

      .description {
        display: flex;

        .column {
            
          p {
            font-family: Montserrat, sans-serif;
            font-style: normal;
            font-weight: lighter;
            font-size: 18px;
            line-height: 123.4%;
            letter-spacing: 0.02em;
            color: #000000;

            span {
              font-weight: bold;
              font-style: italic;
            }
          }

          button {
            font-family: Myriad Pro, sans-serif;
            font-size: 16px;
            line-height: 123.4%;
            display: flex;
            align-items: center;
            justify-self: center;
            text-align: center;
            letter-spacing: 0.02em;
            color: #DA0D46;
            border: 1px solid #DA0D46;
            box-sizing: border-box;
            border-radius: 15px;
          }
        }

        img {
          width: 272px;
          height: 172px;
          border-radius: 15px;    
        }
      }
    }
  }

  .get-involved {

  }

  .events {

  }

  .projects {

  }
`

export default IndexPage;