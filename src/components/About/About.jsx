import React from "react";
import {
  IconCode,
  IconDeviceLaptop,
  IconSchool,
  IconSparkles,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandPython,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandFigma,
  IconBrandNodejs,
  IconCoffee,
  IconDatabase,
  IconTerminal2,
} from "@tabler/icons-react";
import photo1 from "/src/assets/Photos/4D68B9B3-F3F2-42B3-AFC5-FE206D830DDF.PNG";
import SectionHeader from "../Section/SectionHeader";

const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", Icon: IconBrandJavascript },
      { name: "TypeScript", Icon: IconBrandTypescript },
      { name: "Java", Icon: IconCoffee },
      { name: "Python", Icon: IconBrandPython },
      { name: "HTML5", Icon: IconBrandHtml5 },
      { name: "CSS3", Icon: IconBrandCss3 },
    ],
  },
  {
    label: "Frameworks & Tools",
    items: [
      { name: "React", Icon: IconBrandReact },
      { name: "Node.js", Icon: IconBrandNodejs },
      { name: "Tailwind", Icon: IconBrandTailwind },
      { name: "MongoDB", Icon: IconDatabase },
      { name: "Git", Icon: IconBrandGithub },
      { name: "Figma", Icon: IconBrandFigma },
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
        kicker="A short look at who I am, what I work with, and what I'm currently exploring."
      />

      <div className="mt-10 space-y-5 px-4 sm:space-y-6 sm:px-6 md:mt-12 lg:px-12">
        {/* Row 1: Hi I'm Dion + Photo (side by side on lg+) */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          <InfoCard icon={IconSparkles} title="Hi, I'm Dion">
            <p>
              I'm a third-year{" "}
              <span className="font-medium text-white">
                Software Engineering
              </span>{" "}
              student at the University of Guelph with a strong foundation in
              full-stack development, specializing in React and Java.
            </p>
            <p className="mt-3">
              I enjoy building responsive web apps, designing clean interfaces,
              and shipping projects that combine thoughtful design with
              functional code.
            </p>
          </InfoCard>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
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
        <InfoCard icon={IconCode} title="Skills & Technologies">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
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
              B.Eng. Software Engineering · 3rd year
            </p>
            <p className="mt-2 text-white/60">
              Coursework in algorithms, data structures, software design, and
              systems programming.
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
                Leading lab sessions and mentoring peers
              </li>
              <li className="flex items-start gap-2">
                <IconCode
                  size={14}
                  className="mt-1 shrink-0 text-white/60"
                  stroke={1.75}
                />
                Building React + data analysis tooling
              </li>
              <li className="flex items-start gap-2">
                <IconSparkles
                  size={14}
                  className="mt-1 shrink-0 text-white/60"
                  stroke={1.75}
                />
                Exploring new tech for better UX
              </li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default About;
