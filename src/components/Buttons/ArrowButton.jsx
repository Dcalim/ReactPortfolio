import React, { useRef, useState } from 'react';
import { FaArrowDown } from "react-icons/fa";

const ArrowButton = ({ targetId = "about", className = "" }) => {
  const iconRef = useRef(null);
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    if (spinning || !iconRef.current) return;
    setSpinning(true);

    const animation = iconRef.current.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(360deg)" },
      ],
      { duration: 650, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
    );

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setSpinning(false);
    };

    animation.finished.then(scrollToTarget).catch(scrollToTarget);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={spinning}
      aria-label={`Scroll to ${targetId} section`}
      className={`group inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/70 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:cursor-default disabled:hover:translate-y-0 sm:h-12 sm:w-12 ${className}`}
    >
      <span ref={iconRef} className="inline-flex">
        <FaArrowDown size={18} />
      </span>
    </button>
  );
};

export default ArrowButton;
