import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const Project = () => {
  const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: {fields: {collections: {eq: "projects"}}}
                sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
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
          <div className="content" key={edge.node.id}>

            <div className="imgBox">

              <PreviewCompatibleImage key={edge.node.frontmatter.id}
                imageInfo={{
                  image: edge.node.frontmatter.projectImage,
                  alt: "photo of project"
                }} />
            </div>

            <h3>{edge.node.frontmatter.title}</h3>


            <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
            <p className="tools">Tools Used: {edge.node.frontmatter.tools}</p>
            <div className="toggle-buttons">
              <a as="a" className="github-button" href={edge.node.frontmatter.githubURL} key={edge.node.frontmatter.id} target="_blank" rel="noreferrer" >GITHUB</a>
              <a className="prototype-button" href={edge.node.frontmatter.projectURL} key={edge.node.frontmatter.id} target="_blank" rel="noreferrer" >Prototype</a>
            </div>
          </div>


        )
      })}

    </ProjectStyle >
  )
}

export default Project

const ProjectStyle = styled.div`
 
  @media (min-width:700px) {
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
.content{
  position: relative;
  height: 30.56rem;
  width: 17rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  @media (min-width:700px) {
    flex: 1;
    margin: 2rem 5rem;
    max-width: 25rem;
    
  }
  }
  .gatsby-image-wrapper {
    height: 12.625rem;
   
  }
  .tools {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 4rem;
    @media (min-width: 700px) {
      margin: 3rem 1rem;
    }
    @media (min-width: 900px) {
      margin-bottom: 5rem;
    }
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    
  }
  .toggle-buttons{
    display: inline-block;
    position: absolute; 
    bottom: 0;
    right: 0;
    left: 0;
    margin: 1rem;
  }
.github-button {
  background: #C4C4C4;
  padding: .5rem  1.3rem;
}
.prototype-button {
  border: 2px solid #C4C4C4;
  box-sizing: border-box;
  padding: .5rem .2rem;
}
  @media (min-width: 700px) {
   
    .github-button {
      background: #017A8E;
      border: 2px solid #017A8E;
      color: white;
      padding: .5rem .8rem;
    }
    .prototype-button {
      border: 2px solid #017A8E;
      color: #017A8E;
    }
  }
`
