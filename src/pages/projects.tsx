// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = (props: PageProps) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the Projects page</h1>
    <p>Now for a little about us. Here's the page path: ({props.path})</p>
    <Link to="/">Homepage</Link>
    <br />
    <Link to="/about/">About Us</Link>
    <br />
    <Link to="/announcements/">Announcements</Link>
  </Layout>
)

export default Projects
