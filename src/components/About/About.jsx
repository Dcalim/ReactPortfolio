import React from "react";
import {
  IconCode,
  IconDeviceLaptop,
  IconSchool,
  IconSparkles,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandPython,
  IconBrandHtml5,
  IconBrandGithub,
  IconBrandFigma,
  IconCoffee,
  IconDatabase,
  IconTerminal2,
  IconSql,
  IconLetterC,
  IconBrandSwift,
  IconMathFunction,
  IconBrandRedux,
  IconLeaf,
  IconCube,
  IconBrandBootstrap,
  IconTestPipe,
  IconBug,
  IconBrandAws,
  IconCloud,
  IconBrandDocker,
  IconBrandFirebase,
  IconBrandSupabase,
  IconBrandUbuntu,
  IconLayoutKanban,
  IconUsersGroup,
  IconPackages,
  IconPalette,
} from "@tabler/icons-react";
import photo1 from "/src/assets/Photos/DionCalim2026.jpg";
import SectionHeader from "../Section/SectionHeader";

const skillGroups = [
  {
    label: "Programming languages",
    items: [
      { name: "Java", Icon: IconCoffee },
      { name: "C", Icon: IconLetterC },
      { name: "Python", Icon: IconBrandPython },
      { name: "JavaScript", Icon: IconBrandJavascript },
      { name: "Swift", Icon: IconBrandSwift },
      { name: "R", Icon: IconMathFunction },
      { name: "SQL", Icon: IconSql },
      { name: "HTML / CSS", Icon: IconBrandHtml5 },
    ],
  },
  {
    label: "Frameworks & libraries",
    items: [
      { name: "ReactJS", Icon: IconBrandReact },
      { name: "Redux", Icon: IconBrandRedux },
      { name: "Spring Boot", Icon: IconLeaf },
      { name: "Three.js", Icon: IconCube },
      { name: "Tailwind CSS", Icon: IconBrandTailwind },
      { name: "Bootstrap", Icon: IconBrandBootstrap },
      { name: "JUnit", Icon: IconTestPipe },
      { name: "Mockito", Icon: IconBug },
    ],
  },
  {
    label: "Cloud, DevOps & databases",
    items: [
      { name: "AWS", Icon: IconBrandAws },
      { name: "Salesforce", Icon: IconCloud },
      { name: "Docker", Icon: IconBrandDocker },
      { name: "Firebase", Icon: IconBrandFirebase },
      { name: "PostgreSQL", Icon: IconDatabase },
      { name: "MySQL", Icon: IconDatabase },
      { name: "Supabase", Icon: IconBrandSupabase },
    ],
  },
  {
    label: "Tools & methodologies",
    items: [
      { name: "Git", Icon: IconBrandGithub },
      { name: "Linux", Icon: IconBrandUbuntu },
      { name: "Jira", Icon: IconLayoutKanban },
      { name: "Agile (Scrum)", Icon: IconUsersGroup },
      { name: "Figma", Icon: IconBrandFigma },
      { name: "Adobe Creative Suite", Icon: IconPalette },
      { name: "Maven", Icon: IconPackages },
    ],
  },
];

const InfoCard = ({ icon: Icon, title, children, className = "" }) => (
  <div
    className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:p-6 ${className}`}
  >
    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
    <div className="relative flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white">
        <Icon size={18} stroke={1.75} />
      </span>
      <h3 className="font-heading text-base font-semibold tracking-tight text-white sm:text-lg">
        {title}
      </h3>
    </div>
    <div className="relative mt-4 flex-1 text-sm leading-relaxed text-white/75 sm:text-[15px]">
      {children}
    </div>
  </div>
);

const SkillPill = ({ name, Icon }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/85 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.08] sm:text-sm">
    <Icon size={14} stroke={1.75} className="text-white/80" />
    {name}
  </span>
);

const About = () => {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <SectionHeader
        eyebrow="01 / About"
        title="About Me"
        accent="Me"
      />

      <div className="mt-10 space-y-5 px-4 sm:space-y-6 sm:px-6 md:mt-12 lg:px-12">
        {/* Row 1: Hi I'm Dion + Photo (side by side on lg+) */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
        <InfoCard icon={IconSparkles} title="Hi, I'm Dion" className="order-2 lg:order-1">
          <p>
            I'm a third-year{" "}
            <span className="font-medium text-white">
              Software Engineering
            </span>{" "}
            student at the University of Guelph with experience in full-stack development, particularly with React, Java, and SQL.
          </p>
          <p className="mt-3">
            I enjoy building responsive web applications, designing clean interfaces, and turning ideas into polished, user-focused products. Outside of tech, I enjoy playing basketball, working out, and cooking.
          </p>
        </InfoCard>

          <div className="relative order-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:order-2">
            <img
              src={photo1}
              alt="Dion Calim portrait"
              className="h-full min-h-[260px] w-full object-cover sm:min-h-[320px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            />
          </div>
        </div>

        {/* Row 2: Skills & Technologies (full width) */}
        <InfoCard icon={IconCode} title="Skills & technologies">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillPill
                      key={item.name}
                      name={item.name}
                      Icon={item.Icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Row 3: Education + Currently (side by side on sm+) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <InfoCard icon={IconSchool} title="Education">
            <p>
              <span className="font-medium text-white">
                University of Guelph
              </span>
              <br />
              B.COMP. Software Engineering · 3rd year
            </p>
            <p className="mt-2 text-white/60">
            Relevant coursework: Data Structures, Algorithms, Operating Systems, Software Systems Development & Integration, Systems Analysis & Design
            </p>
          </InfoCard>

          <InfoCard icon={IconDeviceLaptop} title="Currently">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <IconTerminal2
                  size={14}
                  className="mt-1 shrink-0 text-white/60"
                  stroke={1.75}
                />
                Interning at TD Bank as a Software Engineer
              </li>
              <li className="flex items-start gap-2">
                <IconCode
                  size={14}
                  className="mt-1 shrink-0 text-white/60"
                  stroke={1.75}
                />
                Building out HomeHero
              </li>
              <li className="flex items-start gap-2">
                <IconSparkles
                  size={14}
                  className="mt-1 shrink-0 text-white/60"
                  stroke={1.75}
                />
                Looking to connect for my next internship opportunity
              </li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default About;
