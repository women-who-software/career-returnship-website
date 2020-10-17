/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"
import Navbar from "./Navbar/Navbar"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <footer>
        <p>
        Women Who Code isn’t just for women, anyone is welcome!!
        <br/>Connect with #WWCode Boulder/Denver via:
        <br/><a href="https://linktr.ee/wwcodecolorado">https://linktr.ee/wwcodecolorado</a>
        <br/><br/>Copyright {new Date().getFullYear()} Career Returnship.  All rights reserved.
        </p>
      </footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
