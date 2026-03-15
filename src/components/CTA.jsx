import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const CTA = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ".cta-card",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full py-32 bg-brand-bg border-t border-brand-surface z-40 px-6 lg:px-12 flex justify-center"
    >
      <div className="cta-card brutal-card relative w-full items-center justify-center flex flex-col py-32 md:py-48 max-w-7xl">
        <div className="relative text-center z-10 px-6 cta-text-container w-full">
          <span className="cta-content inline-block text-brand-acid font-bold tracking-[0.2em] uppercase mb-10 text-xs md:text-sm">
            Initiate Contact
          </span>

          <h2 className="cta-content text-5xl md:text-8xl lg:text-[120px] font-bold text-text-white mb-16 uppercase tracking-tighter leading-none mx-auto w-full">
            START A <br /> PROJECT.
          </h2>

          <div className="cta-content flex justify-center mt-12">
            <button className="acid-btn-filled px-12 py-5 uppercase text-lg interactive flex items-center group overflow-hidden">
              <span className="relative z-10 group-hover:text-brand-bg transition-colors">
                Contact Us
              </span>
              <span className="bg-brand-bg text-brand-acid w-10 h-10 flex items-center justify-center rounded-full ml-6 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
