import React from "react"
import Styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"



const Event = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark(
        sort: {fields: frontmatter___date, order: ASC}, 
        filter: {fields: {collections: {eq: "events"}}}) {
        edges {
            node {
                id
                html
                frontmatter {
                    slug
                    title
                    url
                    date
        }
      }
    }
  }
}
`)
  return (

    <>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <EventStyle key={edge.node.id}>

            <h4>{edge.node.frontmatter.date} {edge.node.frontmatter.time}</h4>
            <h3>{edge.node.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
            <a href={edge.node.frontmatter.url} target="_blank" rel="noreferrer">More Info</a>

          </EventStyle>
        )
      })}

    </>

  )
}

const EventStyle = Styled.div`
  
  background-color: #FFFFFF;
  border-radius: .625rem;
  padding: .625rem;
  margin: .625rem;
  width: 19rem;
  height: 9.5rem; 
  overflow: hidden;
  
  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #017A8E;
    text-align: center;
    
  }
  h4{
    color: #017A8E;
    margin: 0;
  }
  p {
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    font-size: .75rem;
    line-height: 1.0625rem;
    letter-spacing: 0.02em;
    color: #000000;
    margin: 0;
    
  }
  a {
    color: #017A8E;
    font-size: .75rem;
  }
`


export default Event

