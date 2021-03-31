import React from "react"
import Styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = Styled.div`
  margin: auto 0;
  flex: 0 1 2.25rem;

  @media (max-width: 48rem) and (orientation: landscape) {
    flex: 0 1 1.5625rem;

  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "iconColor" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  )
}

export default Logo
