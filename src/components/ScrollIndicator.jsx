import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

const ScrollIndicator = () => {
  useGSAP(() => {
    gsap.to(".scroll-line", {
      y: 12,
      opacity: 0,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
    });
  });

  return (
    <div
      className="flex flex-col items-center z-20 pointer-events-none"
      aria-hidden
    >
      <span className="text-white uppercase font-sans font-semibold text-[0.85rem] tracking-[0.12em] mb-4">
        SCROLL TO DISCOVER
      </span>
      <svg
        width="24"
        height="36"
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="32"
          rx="10"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.6"
        />
        <line
          className="scroll-line"
          x1="12"
          y1="8"
          x2="12"
          y2="16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ScrollIndicator;
