import React from "react";
import Styled from 'styled-components';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import office from "../images/officecoding.jpg";
import happy from "../images/temp-happyWomenCoding.jpg";
import couch from "../images/couchandkid.jpg";


export default function Slider() {
  return (
    <AliceCarousel autoPlay infinite autoPlayInterval="7000" disableButtonsControls="off" autoHeight="auto" >
      <Image src={office} className="sliderimg" alt="Two womend coding in a office with a computer" />

      <Text>
        <p className="quote">“We could not be more pleased with the result. It was a joy to work with Rafna and each of the team members throughout the process. They asked great questions to get clarity on the requirements, they had many useful suggestions, they came up with an impressive visual design, they kept us informed of their progress, and they created a website that surpassed my expectations."</p>
        <p>-- Michael T. Starks, Producer, <br /><a href="https://www.cv19everydayheroes.com/" target="_blank" rel="noreferrer">Everyday Heroes: A COVID19 Podcast</a></p>
      </Text>

      <Image src={happy} className="sliderimg" alt="2 women coding at table in the sunlight" />
      <Text>
        <p className="quote">"In the Returnship, I collaborated with a team of developers and got real-world experience I couldn't get any other way."</p>
        <br />
        <p className="source">~Finn Thye, volunteer</p>
      </Text>

      <Image src={couch} className="sliderimg" alt="women coding on couche with kid laying upside down." />
    </AliceCarousel >
  )
}

const Image = Styled.img`
  margin: 2em auto;
  object-fit: contain;
  width: 100%;
  
@media (min-width: 43.75rem) {
  height: 450px;
  margin: 4em auto;
}
  
`

const Text = Styled.div`
  width: 100%;
  background: white;
  margin: 2em auto;
  text-align: center;
  font-size: 1em;
  font-family: Myriad Pro;
  border: .3125rem solid #DA0D46;
  padding: 1em;
  a {
    color:#DA0D46;
  }
  @media ( min-width: 43.75rem) {
    font-size: 1.4rem;
    margin: 4em auto;
    width: 60%;
  }
`
