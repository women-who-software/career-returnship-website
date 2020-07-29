import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

const NavItem = Styled(Link)`
  text-decoration: none;
  color: #DA0D46;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: black;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: black;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">About Us</NavItem>
      <NavItem to="/">Networking</NavItem>
      <NavItem to="/">Sponsors</NavItem>
      <NavItem to="/404">Contact Us</NavItem>
      <NavItem to="/404">Become a Member</NavItem>
      <NavItem to="/">Projects</NavItem>
    </>
  )
}

export default NavbarLinks
