import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>WWC Career Returnship</h1>
    <p>Ignite your tech trajectory through community</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Find out About Us</Link>
    <Link to="/announcements/">Go to Announcements</Link>
  </Layout>
)

export default IndexPage
