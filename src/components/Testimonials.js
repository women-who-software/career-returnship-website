import React from "react";
import Styled from 'styled-components';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import bed from "../images/temp-bedWomanCoding.jpg";
import happy from "../images/temp-happyWomenCoding.jpg";

export default function Slider() {
  return (
    <AliceCarousel autoPlay infinite autoPlayInterval="5000">
      <Image src={bed} className="sliderimg" />
      <Text>
        <p className="quote">“Rafna put together and led an amazing team of people from Women Who Code to work on our website. We could not be more pleased with the result. It was a joy to work with Rafna and each of the team members throughout the process. They asked great questions to get clarity on the requirements, they had many useful suggestions, they came up with an impressive visual design, they kept us informed of their progress, and they created a website that surpassed my expectations, https://www.cv19everydayheroes.com/. I look forward to working with these detail-oriented, professional, and talented web developers again!
       </p>
        <br />
        <p className="source"> -- Michael T. Starks, Producer, Everyday Heroes: A COVID19 Podcast”</p>
      </Text>
      <Image src={happy} className="sliderimg" />
      <Text>
        <p className="quote">"In the Returnship, I collaborated with a team of developers and got real-world experience I couldn't get any other way."</p>
        <br />
        <p className="source">~Finn Thye, volunteer</p>
      </Text>
      {/* <img src={image3} className="sliderimg"/>
      <img src={image4} className="sliderimg"/> */}
    </AliceCarousel>
  )
}

const Image = Styled.img`
  width: 50%;
  margin: 1em 0 0 25%;
`

const Text = Styled.div`
  width: 75%;
  height: 500px;
  background: white;
  margin: 1em 0 0 14%;
  text-align: center;
  font-size: 1.5em;
  font-family: Myriad Pro;
  border: 5px solid #DA0D46;
  padding: 1em;
`
/*
style={{width: "50%", height: "auto", margin: "0 auto"}}
style={{width: "50%", height: "auto", margin: "0 auto"}} */