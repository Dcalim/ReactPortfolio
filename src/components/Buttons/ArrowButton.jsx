import React, { useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ArrowButton = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-min h-auto px-2 py-1 border-[#F5F5F5] border-2 rounded-full"
      >
        <span
          className={`py-1 text-white transform transition-transform duration-2000 ease-out ${
            accordionOpen ? "rotate-360" : "rotate-0"
          }`}
        >
          <FaArrowUp size={20}/>
        </span>
      </button>
    </div>
  );
};

export default ArrowButton;
