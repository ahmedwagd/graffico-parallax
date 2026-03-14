import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const techLogos = [
  { name: "React", link: "https://react.dev/" },
  { name: "Node.js", link: "https://nodejs.org/" },
  { name: "Python", link: "#" },
  { name: "AWS", link: "#" },
  { name: "TensorFlow", link: "#" },
  { name: "Docker", link: "#" },
  { name: "PostgreSQL", link: "#" },
  { name: "GSAP", link: "#" },
];

const TechStack = () => {
  const container = useRef();

  useGSAP(
    () => {
      const logos = gsap.utils.toArray(".tech-box");

      gsap.from(logos, {
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 80%",
        },
        scale: 0.9,
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full py-32 bg-brand-bg text-text-white z-30 border-t border-brand-surface"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row gap-12">
        <div className="tech-intro md:w-1/3">
          <p className="text-brand-acid font-bold tracking-widest uppercase mb-4 text-xs">
            Engine
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-none mb-6">
            Tech <br /> Stack.
          </h2>
          <p className="text-text-gray text-sm md:text-base font-medium max-w-sm">
            High-performance engineering leveraging the most robust modern
            frameworks. Built for speed and flexibility.
          </p>
        </div>

        <div className="tech-grid md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {techLogos.map((tech, index) => (
            <div
              key={index}
              className="tech-box brutal-card interactive aspect-square flex items-center justify-center p-6 text-center group cursor-none"
            >
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-text-gray group-hover:text-brand-acid transition-colors">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
