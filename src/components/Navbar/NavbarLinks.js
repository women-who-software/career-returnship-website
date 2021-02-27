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
    text-transform: uppercase;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
  .become {
  color: yellow;
  border: 2px solid #DA0D46;
}
`

const NavbarLinks = () => {
  return (
    <>
   
      <NavItem to="/about">About Us</NavItem>
      <NavItem to="/eventsPage">Networking</NavItem>
      <NavItem as="a" href="https://form.jotform.com/203324916543150" target="_blank" rel="noreferrer" >Sponsors</NavItem>
      <NavItem to="/contactUs">Contact Us</NavItem>
      <NavItem as="a" href="https://form.jotform.com/203243227290043" target="_blank" rel="noreferrer" >Become a Member</NavItem>
      <NavItem to="/projectsPage">Projects</NavItem>
 
    </>
  )
}

export default NavbarLinks
