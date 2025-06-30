import { useState } from 'react'
import './App.css'
import { ShootingStars } from './components/Background/Shooting-stars'
import { Spotlight } from './components/Background/Spotlight'
import { StarsBackground } from './components/Background/Stars-background'
import { Alert } from "@material-tailwind/react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/Navbar/resizable-navbar";
import Hero from './components/Hero/Hero'
import { Carousel } from './components/Carousel/Carousel'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import EarthScene from './components/Earth/Earth'
import vCardUrl from "/src/assets/Photos/vCardManager.jpg"
import squaredUrl from "/src/assets/Photos/squared.jpg"
import hoopsUrl from "/src/assets/Photos/hoops.jpg"
import eventUrl from "/src/assets/Photos/DCalim_EventPoster.jpg"
import companyUrl from "/src/assets/Photos/DCalim_MockUp.png"
import resumeUrl from "/src/assets/Photos/DionCalim_Fall2025.jpg"


function App() {
  const slideData = [
    {
      title: "Vcard Manager",
      button: "View",
      buttonLink: "",
      src: vCardUrl,
    },
    {
      title: "Squared",
      button: "View",
      buttonLink: "https://github.com/Dcalim/Squared-Game",
      src: squaredUrl,
    },
    {
      title: "Hoops",
      button: "View",
      buttonLink: "https://github.com/Dcalim/Hoops-Game",
      src: hoopsUrl,
    },
    {
      title: "Event Promotion",
      button: "View",
      buttonLink: "src/assets/Photos/DCalim_EventPoster.jpg",
      src: eventUrl,
    },
    {
      title: "Company Website Mockup",
      button: "View",
      buttonLink: "src/assets/Photos/DCalim_MockUp.png",
      src: companyUrl,
    }

  ];

  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#project",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
  {/* Background Layer */}
  <div className="fixed top-0 left-0 w-full h-full -z-10 bg-neutral-950 overflow-hidden">
    <Spotlight />
    <ShootingStars />
    <StarsBackground />
  </div>

  {/* Navbar */}
  <div className="relative w-full z-20">
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton variant="primary" href={resumeUrl}>RESUME</NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton variant="primary" className="w-full">
              Login
            </NavbarButton>
            <NavbarButton variant="primary" className="w-full">
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  </div>

  {/* Hero Section */}
  <div className="relative z-10 pt-48">
    <Hero />
  </div>
  
  <div className='-mt-80 flex justify-end'>
    <div className='w-md'>
      <EarthScene/>
    </div>
  </div>

  <section id="about" className='-mt-50 h-[100%] py-20'>
    <About></About>
  </section>

  <section id="project" className="relative overflow-hidden w-full h-full py-20">
      <div className='px-16'>
        <h2 className='text-[#F5F5F5] font-bold text-4xl'>Projects</h2>
        <hr className="my-2 border-t border-[#F5F5F5] w-[20%]" /> 
      </div>
      <Carousel slides={slideData} />
  </section>

  <section id="contact" className='relative py-20 '>
      <div className='px-16'>
        <h2 className='text-[#F5F5F5] font-bold text-4xl'>Contact</h2>
        <hr className="my-2 border-t border-[#F5F5F5] w-[20%]" /> 
      </div>
      <div className='justify-items-center'>
        <Contact></Contact>
      </div> 
  </section>
</>
  
  )
}

export default App
