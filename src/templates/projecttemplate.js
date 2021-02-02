import React from "react"
import { graphql } from "gatsby"


const Project = (props) => {
  
  return (
    <div >
      <div >
        <div >
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <h2>{props.data.markdownRemark.frontmatter.date}</h2>
          <a href={props.data.markdownRemark.frontmatter.ur}target="_blank" rel="noreferrer">Project Link</a>
          <h4>Tools used on this project: {props.data.markdownRemark.frontmatter.tools}</h4>
        </div>
        <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
      </div>
    </div>
  )
}

 export default Project
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tools
        url
      }
    html
  }
  }
`