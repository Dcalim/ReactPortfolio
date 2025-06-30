import React from 'react'
import BlurText from "../TextAnimations/BlurText";
import RotatingText from '../TextAnimations/RotatingText';
import { ContainerTextFlip } from '../TextAnimations/ContainerTextFlip';
import { FaArrowDown } from "react-icons/fa";
import ArrowButton from '../Buttons/ArrowButton';


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center">
      <BlurText
        text="DION CALIMS"
        delay={200}
        animateBy="letters"
        onAnimationComplete={handleAnimationComplete}
        direction="top"
        className="mb-2 lg:text-8xl font-bold text-[#F5F5F5] justify-center sm:text-7xl"
      />
      <BlurText
        text="PORTFOLIO"
        delay={200}
        animateBy="letters"
        onAnimationComplete={handleAnimationComplete}
        direction="top"
        className="mb-2 lg:text-7xl font-bold  text-[#F5F5F5] justify-center sm:text-7xl"
      />
      <ContainerTextFlip
      words={['Software Engineer', 'Web Developer', 'Student', 'Data Analyst']}
      className="my-4"
      />
      <a href="#about">
        <ArrowButton></ArrowButton>
      </a>
      
    </div>
  )
}

export default Hero