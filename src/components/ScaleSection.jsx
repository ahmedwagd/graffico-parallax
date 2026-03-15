import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

const CARDS = [
  {
    title: "A brand that converts",
    body: "A cutting-edge web presence that commands attention and builds lasting trust.",
    iconPath: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    title: "Reclaim your time",
    body: "Eliminate errors and recover valuable hours by automating repetitive, manual tasks.",
    iconPath: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 5v7l4 2",
  },
  {
    title: "Scalability without chaos",
    body: "Build processes ready to scale without the immediate need for additional headcount.",
    iconPath: "M18 20V10M12 20V4M6 20v-6",
  },
  {
    title: "True partnership",
    body: "Interconnected tools and a dedicated team supporting you before, during, and after launch.",
    iconPath:
      "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  },
];

const ScaleSection = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".scale-text-block", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: container.current, start: "top 75%" },
      });

      gsap.from(".scale-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".scale-cards-grid", start: "top 80%" },
      });

      gsap.to(".scale-cards-grid", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full py-24 md:py-32 bg-(--color-brand-bg) text-white overflow-hidden z-20"
    >
      <div className="max-container w-full px-4 md:px-6 lg:px-12 mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 items-start">
        {/* copy */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 pr-0 lg:pr-8">
          <h2 className="scale-text-block font-shrikhand font-bold italic text-3xl md:text-[2.5rem] leading-[1.1] tracking-normal mb-2">
            <span className="text-(--color-brand-cream)">
              Your business is ready to scale, <br />
            </span>
            <span className="text-(--color-brand-red)">
              but is your tech stack holding you back?
            </span>
          </h2>

          <p className="scale-text-block font-sans text-lg md:text-xl text-white/70 font-light leading-relaxed">
            Companies lose{" "}
            <span className="text-(--color-brand-red) italic">
              countless hours
            </span>{" "}
            to{" "}
            <strong className="text-white font-bold">manual processes</strong>,
            human errors, and a digital presence{" "}
            <strong className="text-white font-bold">
              that doesn't reflect
            </strong>{" "}
            their true value.
          </p>

          <div className="scale-text-block border-l-2 border-(--color-brand-red) pl-6">
            <p className="font-sans text-lg md:text-xl text-white/70 font-light leading-relaxed">
              Graffico builds{" "}
              <span className="italic text-white/90">
                tailor-made solutions
              </span>
              : websites, apps, and automations that{" "}
              <strong className="text-(--color-brand-red) font-bold">
                streamline operations
              </strong>
              , renew your brand and make your business{" "}
              <strong className="text-white font-bold inline-block border-b-2 border-(--color-brand-red)">
                faster and more predictable
              </strong>
              .
            </p>
          </div>
        </div>

        {/* cards */}
        <div className="scale-cards-grid w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0">
          {CARDS.map(({ title, body, iconPath }) => (
            <div
              key={title}
              className="scale-card bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-(--color-brand-red)/10 flex items-center justify-center text-(--color-brand-red)">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={iconPath} />
                </svg>
              </div>
              <h3 className="font-sans font-bold text-lg md:text-xl text-white">
                {title}
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;
