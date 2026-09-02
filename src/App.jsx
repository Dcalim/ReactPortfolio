import { useState } from 'react'
import './App.css'
import { ShootingStars } from './components/Background/Shooting-stars'
import { Spotlight } from './components/Background/Spotlight'
import { StarsBackground } from './components/Background/Stars-background'
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
import homeHeroUrl from "/src/assets/Photos/HomeHero.jpg"
import { Carousel } from './components/Carousel/Carousel'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import SectionHeader from './components/Section/SectionHeader'
import vCardUrl from "/src/assets/Photos/vCardManager.jpg"
import squaredUrl from "/src/assets/Photos/squared.jpg"
import hoopsUrl from "/src/assets/Photos/hoops.jpg"
import eventUrl from "/src/assets/Photos/DCalim_EventPoster.jpg"
import companyUrl from "/src/assets/Photos/DCalim_MockUp.png"
import resumeUrl from "/src/assets/Photos/DionCalim_Resume2026.pdf"


function App() {
  const slideData = [
    {
      title: "Vcard Manager",
      button: "View",
      buttonLink: "https://github.com/Dcalim",
      src: vCardUrl,
      status: "Completed",
      tech: ["C", "Python", "SQL"],
      summary:
        "Contact manager app with secure authentication, searchable records, and a clean dashboard for organizing digital business cards.",
    },
    {
      title: "Hoops",
      button: "View",
      buttonLink: "https://github.com/Dcalim/Hoops-Game",
      src: hoopsUrl,
      status: "Completed",
      tech: ["Processing"],
      summary:
        "Arcade-style basketball mini game with score tracking, animated interactions, and mobile-friendly controls.",
    },
    {
      title: "Event Promotion",
      button: "View",
      buttonLink: eventUrl,
      src: eventUrl,
      status: "Completed",
      tech: ["Photoshop", "Brand Design", "Marketing"],
      summary:
        "Promotional design project balancing typography, contrast, and composition to drive audience engagement.",
    },
    {
      title: "HomeHero",
      button: "View",
      buttonLink: "https://github.com/Dcalim/HomeHero", 
      src: homeHeroUrl,
      status: "In Progress",
      tech: ["Swift", "Springboot", "Supabase", "MyBatis", "TCA"],
      summary:
        "Full-stack platform for shared households to manage tasks, split expenses, and stay organized.",
    },
    {
      title: "Squared",
      button: "View",
      buttonLink: "https://github.com/Dcalim/Squared-Game",
      src: squaredUrl,
      status: "Completed",
      tech: ["Java"],
      summary:
        "Interactive puzzle game focused on smooth gameplay, responsive UI, and reusable components for scalable feature additions.",
    },
    {
      title: "Company Website Mockup",
      button: "View",
      buttonLink: companyUrl,
      src: companyUrl,
      status: "Completed",
      tech: ["Figma", "UI Design", "Prototyping"],
      summary:
        "Modern business website concept exploring strong visual hierarchy, conversion-focused sections, and component consistency.",
    },
  ];

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#project" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-neutral-950">
        <Spotlight />
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* Navbar */}
      <div className="relative z-20 w-full">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <NavbarButton variant="primary" href={resumeUrl}>
              Resume
            </NavbarButton>
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
                  className="rounded-xl px-4 py-3 text-base font-medium text-white/85 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-2 flex w-full flex-col gap-2 px-1 pb-1">
                <NavbarButton
                  variant="primary"
                  href={resumeUrl}
                  className="w-full"
                >
                  Resume
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center px-4 pt-24 pb-8 sm:px-6 sm:pt-28 sm:pb-10 lg:px-8 lg:pt-32 lg:pb-12">
        <Hero />
      </section>

      <section
        id="about"
        className="relative scroll-mt-14 px-4 py-10 sm:scroll-mt-16 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
      >
        <About />
      </section>

      <section
        id="project"
        className="relative w-full overflow-x-hidden overflow-y-hidden scroll-mt-14 py-10 sm:scroll-mt-16 sm:py-12 lg:py-14"
      >
        <SectionHeader
          eyebrow="02 / Work"
          title="Projects"
          accent="Projects"
        />
        <div className="py-6">
          <Carousel slides={slideData} />
        </div>
      </section>

      <section
        id="contact"
        className="relative scroll-mt-14 py-10 sm:scroll-mt-16 sm:py-12 lg:py-14"
      >
        <SectionHeader
          eyebrow="03 / Get in touch"
          title="Contact"
          accent="Contact"
          kicker="Send a message."
        />
        <div className="mt-6 px-4 sm:mt-8 sm:px-6 lg:px-8">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App
