import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I am <span className="font-semibold">Ziang</span> 👋,
      <br />
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 60,
          strings: ["A Software Developer", "A Data Analyst", "And more..."],
        }}
      ></Typewriter>
    </h1>
  ),
  2: (
    <InfoBox
      text="Joined many clubs and worked on many projects, picked up many skills along the way."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Want me a part of your team? I'm just few key strokes away!"
      link="/contact"
      btnText="Let's talk"
    />
  ),
  4: (
    <InfoBox
      text="Worked on many projects, still challanging myself..."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
