import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const processSteps = [
  { id: "01", name: "Discover", color: "var(--color-brand-acid)" },
  { id: "02", name: "Design", color: "var(--color-brand-acid)" },
  { id: "03", name: "Build", color: "var(--color-brand-acid)" },
  { id: "04", name: "Automate", color: "var(--color-brand-acid)" },
  { id: "05", name: "Scale", color: "var(--color-brand-acid)" },
];

const Process = () => {
  const container = useRef();

  useGSAP(
    () => {
      const scroller = container.current.querySelector(".process-scroller");
      const list = container.current.querySelector(".process-list");

      gsap.to(list, {
        xPercent: -100 + (scroller.offsetWidth / list.offsetWidth) * 100,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${list.offsetWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full h-screen bg-brand-bg text-text-white z-30 overflow-hidden flex flex-col justify-center border-t border-brand-surface"
    >
      <div className="absolute top-10 left-10 text-xs font-bold uppercase tracking-widest text-[#A6A6A6]">
        Methodology. System Workflow.
      </div>

      <div className="process-scroller pl-6 lg:pl-24 w-full max-w-[100vw]">
        <h2
          className="text-5xl md:text-8xl lg:text-[10vw] leading-none font-bold text-transparent tracking-tighter uppercase mb-20 whitespace-nowrap"
          style={{ WebkitTextStroke: "1px var(--color-brand-surface)" }}
        >
          HOW WE WORK.
        </h2>

        <div className="process-list flex items-center space-x-0 w-[300vw] md:w-[150vw] border-t border-b border-brand-surface py-20">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="process-step shrink-0 flex flex-col items-start px-12 md:px-24 border-r border-brand-surface last:border-r-0 interactive"
            >
              <span className="text-xl md:text-3xl font-bold mb-8 text-brand-acid">
                [{step.id}]
              </span>

              <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
                {step.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
