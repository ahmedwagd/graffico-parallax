import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Confetti from "./Confetti";
import ScrollIndicator from "./ScrollIndicator";
import Stats from "./Stats";

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 2;
        const yPos = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to(".hero-logo", {
          x: xPos * 40,
          y: yPos * 40,
          duration: 2,
          ease: "power3.out",
        });

        gsap.to(".confetti-container", {
          x: xPos * -30,
          y: yPos * -30,
          duration: 2.5,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: container },
  );

  return (
    <section
      id="home"
      ref={container}
      className="relative w-full min-h-screen bg-(--color-brand-bg) flex flex-col justify-end pt-18 overflow-hidden"
    >
      <div className="confetti-container absolute inset-0 z-10 pointer-events-none">
        <Confetti />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-18 md:mt-0 z-0">
        <img
          src="/logo-long-small.svg"
          alt="logo"
          className="hero-logo w-[90%] md:w-[75vw] max-w-350 object-contain opacity-100 transition-opacity group-data-[theme=cream]/navbar:opacity-0"
        />
      </div>

      <div className="relative z-20 max-container w-full px-4 md:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-end pb-12 h-full space-y-12 md:space-y-0">
        <div className="subheading-container flex flex-col w-full md:w-4/12 text-left mb-6 md:mb-0">
          <span className="subheading-element text-(--color-brand-red) font-sans font-bold text-[0.85rem] tracking-[0.12em] uppercase mb-4">
            WEB STUDIO
          </span>
          <h2 className="font-shrikhand subheading-element  font-bold italic text-[2.5rem] leading-[1.1] text-(--color-brand-cream) mb-6 tracking-normal">
            We craft digital experiences
          </h2>
          <p className="subheading-element font-sans font-normal text-[1rem] leading-normal text-(--color-brand-cream) opacity-60 w-full sm:max-w-sm">
            We engineer the success of your vision through technology and
            innovation.
          </p>
        </div>

        <div className="bottom-elements w-full md:w-4/12 flex justify-center mb-8 md:mb-0 order-last md:order-0 relative md:bottom-auto">
          <ScrollIndicator />
        </div>

        <div className="bottom-elements w-full md:w-4/12 flex justify-center md:justify-end">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
