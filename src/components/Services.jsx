import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const serviceList = [
  { id: "01", name: "Digital Ecosystems", meta: "Web & Mobile Platforms" },
  { id: "02", name: "Automation & CI/CD", meta: "Infrastructure Scale" },
  { id: "03", name: "AI Implementations", meta: "Predictive Engines" },
  { id: "04", name: "Enterprise Systems", meta: "Custom Software DB" },
];

const Services = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".service-header", {
        scrollTrigger: {
          trigger: ".service-header",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".service-row", {
        scrollTrigger: {
          trigger: ".service-table",
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full py-32 bg-brand-bg text-text-white z-20 border-t border-brand-surface"
    >
      <div className="w-full overflow-hidden border-b border-brand-surface pb-6 mb-24 interactive cursor-pointer bg-brand-surface">
        <div className="animate-marquee pt-6">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mx-8 text-brand-surface"
              style={{
                fontFamily: "var(--font-heading)",
                color: "transparent",
                WebkitTextStroke: "1px var(--color-brand-acid)",
              }}
            >
              DIGITAL TRANSFORMATION
              <span
                className="mx-8 text-text-white"
                style={{ WebkitTextStroke: "0px" }}
              >
                *
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full overflow-hidden">
        <div className="service-header mb-20">
          <p className="text-text-gray font-bold tracking-widest uppercase mb-4 text-xs">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-white to-[#A6A6A6]">
            Architecting The Future.
          </h2>
        </div>

        <div className="service-table w-full border-t border-brand-surface">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="service-row group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 border-b border-brand-surface hover:bg-brand-acid transition-colors duration-300 interactive px-4 -mx-4 cursor-none"
            >
              <div className="flex items-center space-x-8 md:w-1/2">
                <span className="text-brand-acid font-bold group-hover:text-brand-bg md:text-xl transition-colors">
                  {service.id}
                </span>
                <h3
                  className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter group-hover:text-brand-bg transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.name}
                </h3>
              </div>

              <div className="flex items-center md:justify-end md:w-1/2 mt-6 md:mt-0 text-text-gray group-hover:text-brand-bg uppercase font-bold tracking-widest text-xs md:text-sm">
                <span>[ {service.meta} ]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
