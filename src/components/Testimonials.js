import React from "react";
import Styled from 'styled-components';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import bed from "../images/temp-bedWomanCoding.jpg";
import happy from "../images/temp-happyWomenCoding.jpg";

export default function Slider() {
  return (
    <Wrapper>
      <div arial-label="Testimonials about Women Who Code" className="Slider">
        <AliceCarousel autoPlay autoHeight infinite autoPlayInterval="5000">
        <img src={bed} className="sliderimg"/>
        <img src={happy} className="sliderimg"/>



          {/* <div className="intro-text left-0 text-center bg-faded p-2 rounded">
            <h4 className="mb-3">
              Working on a website project with a team of Women Who Code volunteers gave me experience in real-world dev collaboration that I couldn't get anywhere else.""
            </h4>
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">~Finn Thye, Returnship Volunteer</span>
            </h2>
            <div className="intro-text left-0 text-center bg-secondary p-1 rounded">
            <h4 className="text-primary mt-5 mb-3">
              The returnship is a stimulating exercise in creativity and preparation for the unknown.  I love it!
            </h4>
              <h2 className="section-heading mb-4">
                <span className=" text-primary section-heading-upper">~Rafna Bash, Returnship Director</span>
              </h2>
            </div>
          </div>
          <img
            className="sliderimg"
            src={happy}
            alt="Anna and Ande enjoying our pasture turnout at Taft Hill Acres"
            
          />
          <div className="intro-text left-0 text-center bg-faded p-2 rounded">
            <h4 className="mb-3">
              I had a horse in training there with Cayla Stone. Great place, laid back enviroment but very clean and well kept. Horses all looked great and were happy. Everyone there was nice too. I definitely recommend it.
              </h4>
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">~Erin</span>
            </h2>
            <div className="intro-text left-0 text-center bg-secondary p-1 rounded">
              <h4 className="text-primary mt-5 mb-3">
                Everyone is so welcoming! When I first came to Colorado with my horse, I just thought it was going to be like my old barn. Overpriced and with rude people. That couldn't be farther from the truth! They keep up the facility and take amazing care of the horses! My horse just left to go live with my family and I will miss each and everyone of them greatly!
              </h4>
              <h2 className="section-heading mb-4">
                <span className="text-primary section-heading-upper">~Samantha</span>
              </h2>
            </div>
          </div>

          <img
            className="sliderimg"
            src={bed}
            alt="Woman sitting on a bed coding"
          /> */}
        </AliceCarousel >
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  .sliderimg{
    width: 100%;
    height: 500px;
    object-fit: cover
  }
`