import React from 'react'
import styled from "styled-components"
import GitHubImg from "../images/github-logo.svg"
import LinkedinImg from "../images/linkedin-logo.svg"
import MeetupImg from "../images/meetup-logo.svg"
import IconImg from "../images/icon-color.png"


const FooterSection = () => {
    return (
        <FooterWrapper>
            <div className="footerContainer">
                <div className="row">


                    <div class="icon">
                        <a href="https://www.meetup.com" >

                            <img className="img_sm_logo"
                                src={MeetupImg}
                                alt="meetup" />
                        </a>
                    </div>

                    <div class="icon">
                        <a href="https://www.linkedin.com" >

                            <img className="img_sm_logo"
                                src={LinkedinImg}
                                alt="linkedin" />
                        </a>
                    </div>

                    <div class="icon">
                        <a href="https://www.github.com" >
                            <img className="img_sm_logo"
                                src={GitHubImg}
                                alt="github" />
                        </a>
                    </div>

                </div>

                <div class="subfooter">

                    <div class="career-logo"><img className="img_logo"
                        src={IconImg}
                        alt="icon" />

                        <h4 class="career-title">CAREER RETURNSHIP</h4>
                    </div>

                    <div class="info">
                        <ul>
                            <li>
                                <a href="#">Disclaimers</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div class="copy">
                        <p>Copyright ©2020 Career Returnship. All right reserved.</p>

                    </div>
                </div>
            </div>
        </FooterWrapper >
    )
}



const FooterWrapper = styled.div`

background: #E5E5E5;
color: #4C4C4C;
font-size: 14px;
padding: 20px;
width: 100%;

    .row {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .icon {
        background: white;
        border-radius: 15px;
        margin: 20px;
        padding: 0;
        width: 55px;
        height: 45px;

    .img_sm_logo {
        margin: 5px 0 0 3px;
        width: 50px;
        height: 35px;
    }
}
@media screen and (min-width: 700px) {
    .row {
        margin: 10px 0 ;
    }
}
    .subfooter {
        border-top: solid 3px #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        width: 100%;
        padding-top: 20px;
    }
    .career-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
    }
    .career-title {
        color: #DA0D46;
        font-weight: normal;
        font-size: 26px;
        line-height: 27px;
        letter-spacing: 0.02em;
        padding-left: 5px;
    }

    .career-logo img{
        width: 45px;
        height: 45px;
    }
    .info {
        margin: 0;
        padding: 0;
    }
    .info ul {
        display: flex;
        justify-content: flex-start;
        margin: 0;
    }
    .info ul li {
        height: 0;
        list-style: none;
        padding: 15px;
    }
    .info a {
        border-right: 1px solid #4C4C4C;
        color: #4C4C4C;
        font-size: 10px;
        margin: 0;
        padding-right: 10px;
        text-decoration: none;
    }

    .copy {
        margin: 0 auto;
        font-size: 10px;
    }
@media screen and (min-width: 700px) {

    .subfooter {
        aligin-items: flex-start;
        flex-direction: row;
        justify-content: center;
        margin: 0 auto;
        padding: 0;
        width: 80%;
    }
    .career-logo {
        margin-left: -130px;
    }
    .info {
        margin: 10px;
    }
    .copy {
        display: block;
        margin: 80px 0 0 -320px;
    }
}
`
export default FooterSection