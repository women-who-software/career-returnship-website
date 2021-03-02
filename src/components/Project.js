import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const Project = () => {
  const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: {fields: {collections: {eq: "projects"}}}
                sort: {fields: frontmatter___date, order: ASC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        tools
                        projectURL 
                        githubURL
                        projectImage {
                            childImageSharp {
                              fluid(maxWidth: 250, maxHeight: 250) {
                                ...GatsbyImageSharpFluid
                            }
                  }
                }
              }
              html
            }
          }
        }
      }
      `)

  return (
    <ProjectStyle>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <div className="content">

            <div className="imgBox">

              <PreviewCompatibleImage key={edge.node.frontmatter.id}
                imageInfo={{
                  image: edge.node.frontmatter.projectImage,
                  alt: "photo of project"
                }} />
            </div>

            <h3>{edge.node.frontmatter.title}</h3>
            <p>Tools Used: {edge.node.frontmatter.tools}</p>

            <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>

            <div className="toggle-buttons">
              <button className="github-button"><a href={edge.node.frontmatter.githubURL} key={edge.node.frontmatter.id}>GITHUB</a></button>
              <button className="prototype-button"><a href={edge.node.frontmatter.projectURL} key={edge.node.frontmatter.id}>Project Page</a></button>
            </div>
          </div>


        )
      })}

    </ProjectStyle>
  )
}

const ProjectStyle = styled.div`
  align-items: center;
  background: #E5E5E5;
  color: #DA0D46;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 1.5rem;
  text-decoration: none;
  width: 65%;

  @media (min-width: 900px) {
    flex-direction: row;
    margin: 0 1.5rem;
  }
.imgBox {
  margin: 0;
  width: 450px;
  
}
      .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        margin: 0 auto;
        padding-bottom: 20px;
        text-align: center;
        width: 100%;
       

        
        p, h3 {
         color: #000000;
         padding: 5px;
         margin: 0;
        }
        h3 {
          font-size: 1rem;
          margin: .5rem 0;
          padding: 0;
        }
        
      }
      a {
          text-decoration: none;
          color: black;
      }
      @media  (min-width: 700px) {
        align-items: center;
        flex-direction: row;
        h3{
          font-size:2rem;
        }
        h2 {
          margin-left: 20rem; 
        }
        .column {
          margin: 0 10px;
          width: 70%;
        }
      }

    .github-button {
      background: #017A8E;
      border: 2px solid #017A8E;
    }
    .prototype-button {
      border: 2px solid #017A8E;
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
      padding: 20px;
      margin-top: 20px;
      text-decoration: none;
  }
`

export default Project


