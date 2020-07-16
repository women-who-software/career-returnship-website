/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Img from "gatsby-image"

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      file(relativePath: { eq: "Hero-subtract.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`
    /*query SiteTitleQuery {
      site {
      siteMetadata {
        title
      }
    }
    /*
    const data = graphql`
    query ImageQuery {
  allFigmaImage {
    nodes {
      id
      image
    }
  }
}`*/
  )
//{/*{data.site.siteMetadata.title}*/}

  return (
    <div>
      <Img fluid={data.file.childImageSharp.fluid}
          alt="monitor backgroud in dark mode" />
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
