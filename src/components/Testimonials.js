import React from "react";
import Styled from 'styled-components';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import bed from "../images/temp-bedWomanCoding.jpg";
import happy from "../images/temp-happyWomenCoding.jpg";

export default function Slider() {
  return (
    <AliceCarousel autoPlay autoPlayInterval="3000">
        <Image src={bed} className="sliderimg"/>
        <Image src={happy} className="sliderimg"/>
        <Text>Hello World</Text>
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
  width: 50%;
  background: purple;
  margin: 1em 0 0 25%;
  text-align: center;
  font-size: 4em;
`
/* 
style={{width: "50%", height: "auto", margin: "0 auto"}}
style={{width: "50%", height: "auto", margin: "0 auto"}} */