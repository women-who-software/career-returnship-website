import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F4F4F4`,
      height: `0vh`,
    }}
  >
   
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
