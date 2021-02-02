// import React from "react"
// import { graphql, Link } from "gatsby"

// const Event = (props) => {
 
//   return (
//     <div >
//       <div >
//         <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//         <h2>Event Date: {props.data.markdownRemark.frontmatter.date}</h2>
//         <a href={props.data.markdownRemark.frontmatter.url} target="_blank" rel="noreferrer">Event Link</a>
//       </div>
//     </div>
//   )
// }
// export default Event

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//         url
//       }
//     }
//   }
// `