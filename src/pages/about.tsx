// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = (props: PageProps) => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the About page</h1>
    <p>Now for a little about us. Here's the page path: ({props.path})</p>
    <Link to="/">Homepage</Link>
    <br />
    <Link to="/announcements/">Announcements</Link>
    <br />
    <Link to="/projects/">Projects</Link>


  </Layout>
)

export default AboutUs
