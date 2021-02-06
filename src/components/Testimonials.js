import React from "react";
import Styled from 'styled-components';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import bed from "../images/temp-bedWomanCoding.jpg";
import happy from "../images/temp-happyWomenCoding.jpg";

export default function Slider() {
  return (
    <AliceCarousel autoPlay infinite autoPlayInterval="5000">
        <Image src={bed} className="sliderimg"/>
        <Text>
          <p className="quote">"Working with the Career Returnshippers was a pleasure.  Their work was prompt and precisely to specifications."</p>
          <br/>
          <p className="source">~Count Dracula</p>
        </Text>
        <Image src={happy} className="sliderimg"/>
        <Text>
          <p className="quote">"In the Returnship, I collaborated with a team of developers and got real-world experience I couldn't get any other way."</p>
          <br/>
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
  font-size: 3em;
  font-family: Myriad Pro;
  border: 5px solid #DA0D46;
  padding: 1em;
`
/* 
style={{width: "50%", height: "auto", margin: "0 auto"}}
style={{width: "50%", height: "auto", margin: "0 auto"}} */