import React from "react";

/**
 * SectionHeader
 * Reusable, consistent section title used across the site.
 *
 * Visual structure:
 *   ── 02 ────────  (eyebrow row with line + small label)
 *   About Me        (large title with subtle gradient on accent word)
 *   short kicker text
 *
 * Props:
 *  - eyebrow: small label shown above title (e.g. "01", "Work", etc.)
 *  - title:   main heading text
 *  - accent:  optional substring of `title` to highlight with a gradient
 *  - kicker:  optional supporting line below the title
 *  - align:   "left" | "center"  (default "left")
 */
const SectionHeader = ({
  eyebrow,
  title,
  accent,
  kicker,
  align = "left",
  className = "",
}) => {
  const isCenter = align === "center";

  const renderTitle = () => {
    if (!accent || !title.includes(accent)) {
      return title;
    }
    const [before, after] = title.split(accent);
    return (
      <>
        {before}
        <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          {accent}
        </span>
        {after}
      </>
    );
  };

  return (
    <div
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-12 ${className}`}
    >
      <div className={isCenter ? "text-center" : "text-left"}>
        {eyebrow && (
          <div
            className={`flex items-center gap-3 ${
              isCenter ? "justify-center" : "justify-start"
            }`}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-white/60 to-white/60 sm:w-12" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs">
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent via-white/60 to-white/60 sm:w-12" />
          </div>
        )}

        <h2
          className={`mt-3 font-heading font-semibold leading-[1.05] tracking-tight text-[#F5F5F5] ${
            isCenter ? "mx-auto" : ""
          } text-4xl sm:text-5xl md:text-6xl`}
        >
          {renderTitle()}
        </h2>

        <div
          className={`mt-3 flex items-center gap-2 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span className="h-1 w-10 rounded-full bg-white" />
          <span className="h-1 w-3 rounded-full bg-white/40" />
          <span className="h-1 w-1.5 rounded-full bg-white/20" />
        </div>

        {kicker && (
          <p
            className={`mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {kicker}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
