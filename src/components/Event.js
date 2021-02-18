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
                    date(formatString: "MM DD, YYYY")
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
          <EventStyle>

            <h4>{edge.node.frontmatter.date}</h4>
            <h4>{edge.node.frontmatter.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
            <a href={edge.node.frontmatter.url}>More Info</a>

          </EventStyle>
        )
      })}

    </>

  )
}

const EventStyle = Styled.div`
  
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 318px;
  height: 152px; 
  h2{
  font-size: 14px;
  font-weight: 700;
  color: #017A8E;
  }
  h4{
    color: #017A8E;
    margin: 0;
  }
  p {
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #000000;
    margin: 0;
  }
  a {
    color: #017A8E;
    font-size: 12px;
  }
`


export default Event

