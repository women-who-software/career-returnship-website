import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

const NavItem = Styled(Link)`
  text-decoration: none;
  color: #4C4C4C;;
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
    background: #DA0D46;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #DA0D46;
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
const ExtProjects = Styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
  background: #DA0D46;
  padding: .5rem;
  margin-left: .5rem;
  transition: all 200ms ease-in;
  :hover{
    background: white;
    border: 5px solid #da0d46;
    color: #da0d46;
  }
`
const ExtMember = Styled.a`
  color: #da0d46;
  border: 5px solid #da0d46;
  padding: .25rem;
  text-decoration: none;
  transition: all 200ms ease-in;
  :hover {
    background: #da0d46;
    color: white;
  }
`
const ExtSponsor = Styled.a`
  text-decoration: none;
  color: #4C4C4C;;
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
    background: #DA0D46;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #DA0D46;
    text-transform: uppercase;
    ::after{
      width: 100%;
    }
  }
`

const NavbarLinks = () => {
  return (
    <>

      <NavItem to="/about">About Us</NavItem>
      <NavItem to="/eventsPage">Networking</NavItem>
      <ExtSponsor href="https://form.jotform.com/203324916543150" target="_blank" rel="noreferrer" >Sponsors</ExtSponsor>
      <NavItem to="/contactUs">Contact Us</NavItem>
      <ExtMember href="https://form.jotform.com/203243227290043" target="_blank" rel="noreferrer" >Become a Member</ExtMember>
      <ExtProjects ExtProjects href="/projectsPage">Projects</ExtProjects>

    </>
  )
}

export default NavbarLinks
