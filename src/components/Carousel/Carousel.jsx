import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

const STATUS_STYLES = {
  Completed:
    "border-emerald-300/60 bg-emerald-500/30 text-emerald-50 ring-1 ring-inset ring-emerald-300/40 shadow-[0_0_18px_rgba(16,185,129,0.55)]",
  "In Progress":
    "border-amber-300/60 bg-amber-500/30 text-amber-50 ring-1 ring-inset ring-amber-300/40 shadow-[0_0_18px_rgba(245,158,11,0.55)]",
  Planned:
    "border-sky-300/60 bg-sky-500/30 text-sky-50 ring-1 ring-inset ring-sky-300/40 shadow-[0_0_18px_rgba(56,189,248,0.55)]",
};

const STATUS_DOT = {
  Completed: "bg-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.95)]",
  "In Progress": "bg-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.95)]",
  Planned: "bg-sky-300 shadow-[0_0_8px_rgba(56,189,248,0.95)]",
};

const Slide = ({
  slide,
  index,
  current,
  expandedIndex,
  handleSlideClick,
  handleExpandToggle,
}) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, buttonLink, title, tech = [], summary, status } = slide;
  const isActive = current === index;
  const isExpanded = expandedIndex === index;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="group relative z-10 mx-[2.5vmin] flex h-[70vmin] w-[70vmin] max-h-[440px] max-w-[440px] flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-center text-white opacity-100 transition-all duration-300 ease-in-out sm:mx-[3vmin] sm:h-[64vmin] sm:w-[64vmin]"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.94) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        {status && (
          <span
            className={`absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] backdrop-blur-sm sm:text-xs ${
              STATUS_STYLES[status] ??
              "border-white/20 bg-black/55 text-white"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 animate-pulse rounded-full ${
                STATUS_DOT[status] ?? "bg-white"
              }`}
            />
            {status}
          </span>
        )}

        <img
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
          style={{ opacity: isActive ? 0.95 : 0.4 }}
          alt={title}
          src={src}
          onLoad={imageLoaded}
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

        <article
          className={`relative flex h-full w-full flex-col justify-end p-3.5 transition-opacity duration-700 ease-in-out sm:p-5 ${
            isActive ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <h3 className="w-fit rounded-lg bg-neutral-800/85 px-3 py-1.5 text-base font-semibold text-[#F5F5F5] sm:text-lg md:text-2xl">
            {title}
          </h3>

          {tech.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
              {tech.map((item) => (
                <span
                  key={`${title}-${item}`}
                  className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white sm:px-2.5 sm:py-1 sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {summary && (
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded
                  ? "mt-3 max-h-40 opacity-100"
                  : "max-h-0 opacity-0 md:group-hover:mt-3 md:group-hover:max-h-40 md:group-hover:opacity-100"
              }`}
            >
              <p className="rounded-lg bg-black/45 p-3 text-left text-xs leading-relaxed text-neutral-100 sm:text-sm">
                {summary}
              </p>
            </div>
          )}

          <div className="mt-3 flex items-center justify-center gap-2 sm:gap-3">
            {summary && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleExpandToggle(index);
                }}
                aria-expanded={isExpanded}
                aria-label={`Toggle summary for ${title}`}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 text-xs font-medium text-white backdrop-blur-sm transition duration-200 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:text-sm md:hidden"
              >
                {isExpanded ? "Hide" : "Details"}
              </button>
            )}

            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/15 bg-white px-4 text-xs font-semibold text-black transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:h-11 sm:text-sm"
            >
              {button}
            </a>
          </div>
        </article>
      </li>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      type="button"
      aria-label={title}
      title={title}
      onClick={handleClick}
      className={`mx-1.5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:translate-y-0 sm:mx-2 ${
        type === "previous" ? "rotate-180" : ""
      }`}
    >
      <IconArrowNarrowRight />
    </button>
  );
};

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(Math.floor(slides.length / 2));
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
    setExpandedIndex(null);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
    setExpandedIndex(null);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
      setExpandedIndex(null);
    }
  };

  const handleExpandToggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const id = useId();

  return (
    <div
      className="relative mx-auto h-[70vmin] w-[70vmin] max-h-[440px] max-w-[440px] touch-pan-y sm:h-[64vmin] sm:w-[64vmin]"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute left-0 top-0 flex transition-transform duration-1000 ease-in-out"
        style={{
          marginLeft: "-3vmin",
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            expandedIndex={expandedIndex}
            handleSlideClick={handleSlideClick}
            handleExpandToggle={handleExpandToggle}
          />
        ))}
      </ul>

      <div className="absolute top-[calc(100%+0.9rem)] flex w-full justify-center">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
