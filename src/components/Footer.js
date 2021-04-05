import React from 'react'
import styled from 'styled-components'

import Meetup from '../images/meetup-logo.svg'
import GitHub from '../images/github-logo.svg'
import LinkTree from '../images/linktree-48-red.png'
import Logo from '../images/logoColorSvg.svg'

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="icons">
                <a href="https://www.meetup.com/Women-Who-Code-Boulder-Denver/events/"><img src={Meetup} className="logo" alt="Meetup Logo" /></a>
                <a href="https://github.com/wwcodecolorado"><img src={GitHub} className="logo" alt="GitHub Logo" /></a>
                <a href="https://linktr.ee/wwcodecolorado"><img src={LinkTree} className="logo" alt="LinkTree Logo" /></a>
            </div>
            <div className="lower-footer">
                <img src={Logo} className="return-logo" alt="Returnship Logo" />
                <ul>
                    <li><a href="https://www.womenwhocode.com/codeofconduct">Disclaimers</a></li>
                    <li><a href="https://www.womenwhocode.com/privacy-policy">Privacy Policy</a></li>
                    <li><a href="https://www.womenwhocode.com/tos">Terms & Conditions</a></li>

                </ul>
            </div>
            <p>&copy; {new Date().getFullYear()} Career Returnship. All rights reserved.</p>


        </FooterWrapper>

    )


}
const FooterWrapper = styled.div` 
background: #F4F4F4;
font-size: .875rem;
margin: 0;
padding: .625rem;
width: 100%;
    .icons {
        display: flex;
        border-bottom: .1875rem solid #FFFFFF;
        margin: 0 auto;
        width: 100%;
    } 
    .icons img {
        
        background: #FFFFFF;
        border-radius: .9375rem;
        padding: .625rem .9375rem;
        margin: 1.25rem; 
        
        
        width: 4.6875rem;
        height: 3.6875rem;
    }
     .lower-footer {  
        margin: 0 auto; 
        width: 100%;
    }
    .return-logo {
        margin: 1.25rem;
        max-width: 15.95rem;
        max-height: 2.625rem;
    }
    ul {
        display: flex;
        margin:  0;
    }
    li {
        margin: 0;
        list-style: none;
       
    }
    li a {
        border-right: .0625rem solid #4C4C4C;
        color: #4C4C4C;
        
        padding: 0 .3125rem;
        text-decoration: none;
    }
li:nth-child(3) a:last-child{
        border: none;
    }
    p {
        text-align: center;
    } 
    @media(min-width: 37.5rem) {
       .icons {
            justify-content: center;
            width: 49%;
       }

       .lower-footer {
            display: flex;
            justify-content: center;
            align-items: center;
       }
       .return-logo {
           margin: 0;
        
       }
       /* li {
           margin-top: 1.25rem;
           margin-bottom: 0;
       }
       p {
           margin-left: 15.625rem;
       } */
    }
`