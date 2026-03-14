import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(".team-word", {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.1,
        ease: "none",
      });

      tl.to(".team-text", {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: "power2.out",
      })
        .to(
          ".team-node",
          {
            scale: 1,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(2)",
          },
          "<",
        )
        .to(
          ".draw-path",
          {
            opacity: 1,
            duration: 0.2,
          },
          "<0.1",
        );

      gsap.to(".draw-path", {
        strokeDashoffset: -12,
        duration: 1,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: container },
  );

  const headingWords = ["We", "are", "developers", "and", "architects", "of"];

  return (
    <section
      id="team"
      ref={container}
      className="relative w-full min-h-screen bg-[#101011] text-white py-24 md:py-32 overflow-hidden z-20 flex items-center"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <div className="flex flex-col z-10 w-full">
          <h2 className="font-sans font-black tracking-tighter text-5xl md:text-6xl lg:text-[5rem] mb-10 leading-[1.05] flex flex-wrap gap-x-3 gap-y-1 perspective-[1000px]">
            {headingWords.map((word, i) => (
              <span
                key={i}
                className="team-word block opacity-0 translate-y-12 -rotate-x-60 text-[#E8DAD0]"
              >
                {word}
              </span>
            ))}
            <span className="team-word block opacity-0 translate-y-12 -rotate-x-60 text-(--color-brand-red)">
              efficiency.
            </span>
          </h2>

          <p className="team-text opacity-0 translate-y-8 text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
            We build end-to-end solutions by merging{" "}
            <strong className="text-white font-bold">
              AI, software engineering
            </strong>{" "}
            and{" "}
            <strong className="text-white font-bold">operational design</strong>
            .
          </p>
          <p className="team-text opacity-0 translate-y-8 text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
            We specialize in transforming complex business problems into elegant
            digital solutions. We don't just write code; we design the entire
            ecosystem to drive your business forward.
          </p>
        </div>

        <div className="team-diagram-wrapper relative w-full h-100 md:h-125 flex items-center justify-center z-10 pl-8 lg:pl-0">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            preserveAspectRatio="none"
          >
            <line
              className="draw-path opacity-0"
              x1="25%"
              y1="35%"
              x2="50%"
              y2="70%"
              stroke="#555"
              strokeWidth="2"
              strokeDasharray="6,6"
            />

            <line
              className="draw-path opacity-0"
              x1="75%"
              y1="35%"
              x2="50%"
              y2="70%"
              stroke="#555"
              strokeWidth="2"
              strokeDasharray="6,6"
            />
          </svg>

          <div className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2 team-node scale-0 opacity-0 flex flex-col items-center gap-4 cursor-pointer hover:scale-110! transition-transform duration-300">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#2A2A2A] bg-black overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200"
                alt="Lorenzo"
                className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-white shadow-black drop-shadow-md">
              Lorenzo
            </span>
          </div>

          <div className="absolute top-[35%] left-[75%] -translate-x-1/2 -translate-y-1/2 team-node scale-0 opacity-0 flex flex-col items-center gap-4 cursor-pointer hover:scale-110! transition-transform duration-300">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#2A2A2A] bg-black overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8c1c?auto=format&fit=crop&q=80&w=200"
                alt="Andrea"
                className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-white shadow-black drop-shadow-md">
              Andrea
            </span>
          </div>

          <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 team-node scale-0 opacity-0 z-20">
            <div className="px-10 py-4 bg-[#C24128] rounded-full shadow-[0_10px_30px_rgba(194,65,40,0.4)] cursor-pointer hover:bg-(--color-brand-red) transition-colors">
              <span className="font-shrikhand text-2xl md:text-3xl italic text-white tracking-widest">
                Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
