import React from "react"
import Styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"



const Event = () => {
    const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}, 
        filter: {fields: {collections: {eq: "events"}}}) {
        edges {
            node {
                id
                html
                frontmatter {
                    slug
                    title
                    url
                    date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`)
  return (
    <EventStyle>
     
       {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <div>
              <h4>{edge.node.frontmatter.date}</h4>
              <h2>{edge.node.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{__html:edge.node.html}}></div>
                  <a href={edge.node.frontmatter.url}>Website</a>
                </div>
      )
    })}
        
      </EventStyle>

  )
}

 const EventStyle = Styled.div`
    
     background-color: #FFFFFF;
     border-radius: 10px;
     padding: 10px;
     margin: 10px;
     width: 318px;
     height: 148px; 

   h2{
     font-size: 18px;
     font-weight: 700;
     color: #017A8E;
     margin: 0;
 }
   h4 {
       margin-top: 0.3rem;
   }

     p {
       font-family: Montserrat, sans-serif;
       font-weight: normal;
       font-size: 14px;
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

