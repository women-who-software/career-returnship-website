import React from "react"
import { PageProps, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      {/* PUT YOUR SECTION's CODE HERE */}
      {/* PUT YOUR SECTION's CODE HERE */}
      {/* PUT YOUR SECTION's CODE HERE */}
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* max-width: ; */
  padding: 100px 0px 55px;
  width: 100%;
`

export default IndexPage;

// // class App extends Component {
//   render(){
//     return <div>Hello, World!</div>
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));