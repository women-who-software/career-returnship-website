// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Announcements = (props: PageProps) => (
  <Layout>
    <SEO title="Announcements" />
    <h1>You reached Announcements</h1>
    <p>Here's the props.path: ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/about/">Find out about us</Link>
  </Layout>
)

export default Announcements
