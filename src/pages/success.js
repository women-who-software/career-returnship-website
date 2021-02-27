import React from "react"
import Logo from "../images/logoColor.png"
import Icon from "../images/iconColor.png"
import styled from "styled-components"

const Success = () => {
  return (
    <SuccessWrapper>
      <img
        className="logo"
        src={Logo}
        alt="Returnship Logo"
      />
      <h1>Thanks for being awesome! </h1>
      <h3>We have received your message and would like to thank you for writing to us. We will reply by email as soon as possible.</h3>
      <a href="/" alt="Return to Home Page" ><img
        className="logo"
        src={Icon}
        alt="Returnship Icon"
      /></a>
      <p>Go Home</p>
    </SuccessWrapper>
  )
}


const SuccessWrapper = styled.div`


  color: black;
  margin: 50px auto;
  text-align: center;
  width: 50%;

  .logo:hover {
    width: 80px;
  }
  `
export default Success
