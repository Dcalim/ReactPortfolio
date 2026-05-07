import React from 'react'
import BlurText from "../TextAnimations/BlurText";
import { ContainerTextFlip } from '../TextAnimations/ContainerTextFlip';
import EarthScene from '../Earth/Earth';

const handleAnimationComplete = () => {
  // reserved for future animation hooks
};

const Hero = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center">
      {/* Earth as background — anchored to the bottom-right of the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 flex aspect-square items-center justify-center
                   right-[-6%] bottom-[-8%] w-[58vw] max-w-[280px]
                   sm:right-[-4%] sm:bottom-[-12%] sm:max-w-[360px]
                   md:right-[-3%] md:bottom-[-14%] md:max-w-[440px]
                   lg:right-[2%] lg:bottom-[-10%] lg:max-w-[560px]
                   xl:right-[6%] xl:bottom-[-6%] xl:max-w-[600px]"
      >
        {/* Soft blue glow behind the earth */}
        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />
        {/* The earth itself, slightly faded so text reads cleanly */}
        <div className="relative h-full w-full opacity-75 sm:opacity-85">
          <EarthScene className="h-full w-full" />
        </div>
      </div>

      {/* Text — centered on the page, in front of the earth */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm sm:text-xs">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          Available for opportunities
        </span>

        <BlurText
          text="DION CALIM"
          delay={200}
          animateBy="letters"
          onAnimationComplete={handleAnimationComplete}
          direction="top"
          className="mb-1 justify-center font-heading text-5xl font-bold tracking-tight text-[#F5F5F5] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-6xl md:text-7xl lg:text-8xl"
        />
        <BlurText
          text="PORTFOLIO"
          delay={200}
          animateBy="letters"
          onAnimationComplete={handleAnimationComplete}
          direction="top"
          className="mb-3 justify-center font-heading text-3xl font-semibold tracking-tight text-white/75 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl lg:text-7xl"
        />

        <ContainerTextFlip
          words={['Software Engineer', 'Web Developer', 'Student', 'Data Analyst']}
          className="my-3 text-sm sm:text-base"
        />

        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-base">
          Building thoughtful interfaces and full-stack experiences from
          Guelph, ON.
        </p>

      </div>
    </div>
  )
}

export default Hero
