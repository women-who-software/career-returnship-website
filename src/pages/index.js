import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Boulder/Denver Women Who Code Tech Returnship Program</h1>
    <p>Ignite your tech trajectory through community</p>
    <p>Now let's build something great together.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About Us</Link>
    <br />
    <Link to="/announcements/">Announcements</Link>
    <br />
    <Link to="/projects/">Projects</Link>
  </Layout>
)

export default IndexPage
