import React from "react";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import barn from '../assets/images/barn.jpeg';
import Cutie from '../assets/images/Annaandande2.jpg';
import pasture from '../assets/images/backfield2.jpg';
import bale from '../assets/images/Bale.jpg'
import bike from '../assets/images/bikepath4.jpg'
import frontfield from '../assets/images/frontfield.jpg'
import isopen from '../assets/images/ISOpen.jpg'

export default function Slider() {
  return (
    <div arial-label="Testimonials about Taft Hill Acres" className="Slider">
      <AliceCarousel autoPlay autoHeight infinite autoPlayInterval="5000">
        <div className="intro-text left-0 text-center bg-faded p-2 rounded">
          <h4 className="mb-3">
            The horses here are so happy and so well taken care of! My old mare was really struggling at her old barn. I was on the waitlist for Taft Hill and Meg was able to find us a spot to get my old lady into a better situation. Since moving, she is acting like a completely different horse. She is bright, interested in her surroundings, and acting like herself again. I am so thankful to have her at Taft Hill Acres and highly recommend the barn!
            </h4>
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">~Sam</span>
          </h2>
          <div className="intro-text left-0 text-center bg-secondary p-1 rounded">
            <h4 className="text-primary mt-5 mb-3">
              Such a wonderful and friendly horse enviroment. It's been such a pleasure to board here. The property is always clean and very mellow and everyone is so friendly!
          </h4>
            <h2 className="section-heading mb-4">
              <span className=" text-primary section-heading-upper">~Jenna</span>
            </h2></div>
        </div>
        <img
          className="sliderimg"
          src={Cutie}
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
          src={pasture}
          alt="Boarding Horse enjoying the grass turned out in our pasture."
          
        />

        <div className="intro-text left-0 text-center bg-faded p-2 rounded">
          <h4 className="mb-3">
            This is the best boarding facility I have ever had my horses at. Meg, Rene and Anna are great people, and it has been a pleasure to have them take care of my animals. I am extremely picky about the care of my horses, having taken care of horses professionally. This barn has an amazing group of boarders. In the long time that I've been here, there has never been any drama. Meg is excellent at addressing any issues that may arise in a prompt and efficient manner. I highly recommend this barn.
            </h4>
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">~Marian</span>
          </h2>


        </div>
        <img
          className="sliderimg"
          src={bale}
          alt="Three horses helping Rene place round bale in their group pen"
          
        />

        <div className="intro-text left-0 text-center bg-faded p-2 rounded">
          <h4 className="mb-3">
            I adore Taft Hill Acres. It is a very no-nonsense barn that focuses on high quality care. Problems are handled quickly and professionally. Highly recommended.
            </h4>
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">~Lindsay</span>
          </h2>
          <div className="intro-text left-0 text-center bg-secondary p-1 rounded">
            <h4 className="text-primary mt-5 mb-3">
              Taft Hill Acres is the best barn I have ever boarded my horse at. My Arabian mare has a very big personality, and they are so accommodating. The barn community is always looking out for each other, and I have never felt more comfortable keeping my horse at a facility. I know that on the days I am not able to get to the barn, because of weather or other reasons, that my horse is in great hands. This is the most stress free barn I have ever been a part of and I could not recommend it enough.
            </h4>
            <h2 className="section-heading mb-4">
              <span className="text-primary section-heading-upper">~Hannah</span>
            </h2>
          </div>
        </div>
        <img
          className="sliderimg"
          src={bike}
          alt="Trail ride on the Poudre River Trail that is accessible from our barn"
          
        />

        <div className="intro-text left-0 text-center bg-faded p-2 rounded">
          <h4 className="mb-3">
            I've been boarding at THA since May and couldn't be happier! They are so attentive, and responsive to any needs you may have. Everyone has each others back, and is really supportive. All amenities are full functioning, there is plenty of room, and it never feels overly crowded! I couldn't ask for a better, more fair priced, or conveniently located stable.
            </h4>
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">~Carolita</span>
          </h2>

          <div className="intro-text left-0 text-center bg-secondary p-1 rounded">
            <h4 className="text-primary mt-5 mb-3">
              Taft Hill Acres has been the best boarding facility I've come across in Fort Collins. Everyone is friendly and welcoming and the facilities are just as great. Bounced back and forth to a couple of barns and happy to find a place that I feel completely comfortable at! Would highly recommend it!
            </h4>
            <h2 className="section-heading mb-4">
              <span className="text-primary section-heading-upper">~August</span>
            </h2>
          </div>
        </div>
        <img
          className="sliderimg"
          src={barn}
          alt="Looking at the main barn, round pen and a group pen"
          
        />
        <div className="intro-text left-0 text-center bg-faded p-2 rounded">
          <h4 className="mb-3">
            Awesome facility! Owners maintain and manage it excellently and horses are always well cared for. I have never met an unkind person here, everyone is considerate and friendly! Diamond and I love it here!
            </h4>
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">~Sally</span>
          </h2>
          <div className="intro-text left-0 text-center bg-secondary p-1 rounded">
            <h4 className="text-primary mt-5 mb-3">
              I've boarded my mare at most of the stables in the area over the last 23 years and this is the best we've experienced! Excellent care by kind, knowledgeable horse people.
            </h4>
            <h2 className="section-heading mb-4">
              <span className="text-primary section-heading-upper">~Sheila</span>
            </h2>
          </div>

        </div>
        <img
          className="sliderimg"
          src={frontfield}
          alt="Turnout pasture with shade and plenty of grass"
          
        />
        <div className="intro-text left-0 text-center bg-faded p-2 rounded">
          <h4 className="mb-3">
            Best barn ever! Quality care for all of the horses and the nicest barn owners. Meg, Rene, and Anna go the extra mile to make sure all of the horses and their owners are well taken care of.
            </h4>
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">~Janet, DVM</span>
          </h2>
          <div className="intro-text left-0 text-center bg-secondary p-1 rounded">
            <h4 className="text-primary mt-5 mb-3">
              I love it here! It's such a safe clean and friendly community with great owners!
            </h4>
            <h2 className="section-heading mb-4">
              <span className="text-primary section-heading-upper">~Sarah</span>
            </h2>
          </div>

        </div>
        <img
          className="sliderimg"
          src={isopen}
          alt="One of our isolation pens that we use for new boarders"
          
        />
        <div className="intro-text left-0 text-center bg-faded p-2 rounded">
          <h4 className="mb-3">
            I beyond love it here and Meg is amazing! I would never have expected the level of care she gives my picky mare.
            </h4>
          <h2 className="section-heading mb-4">
            <span className="section-heading-upper">~Alex</span>
          </h2>

          <div className="intro-text left-0 text-center bg-secondary p-1 rounded">
            <h4 className="text-primary mt-5 mb-3">
              Awesome barn and fantastic people!
            </h4>
            <h2 className="section-heading mb-4">
              <span className="text-primary section-heading-upper">~Kristie</span>
            </h2>
          </div>
        </div>
      </AliceCarousel>
    </div>
  );
}