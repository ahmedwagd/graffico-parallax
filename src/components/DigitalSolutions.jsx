import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DigitalSolutions = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".ds-heading > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ds-heading",
          start: "top 80%",
        },
      });

      const cards = gsap.utils.toArray(".ds-card");
      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.easeOut",
        scrollTrigger: {
          trigger: ".ds-cards-grid",
          start: "top 75%",
        },
      });

      cards.forEach((card) => {
        const graphic = card.querySelector(".ds-graphic");
        if (graphic) {
          gsap.to(graphic, {
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: container },
  );

  return (
    <section
      id="services"
      ref={container}
      className="relative w-full py-24 md:py-32 bg-(--color-brand-bg) text-white overflow-hidden z-20 border-t border-white/5"
    >
      <div className="max-container w-full px-4 md:px-6 lg:px-12 mx-auto flex flex-col gap-16">
        <div className="ds-heading flex flex-col gap-8 w-full">
          <h2 className="font-shrikhand font-bold italic text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tight text-(--color-brand-cream)">
            Digital Solutions <br />
            <span className="text-(--color-brand-red)">Without Compromise</span>
          </h2>
          <div className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
            <p>
              <strong className="text-white font-bold">
                Advanced technology
              </strong>{" "}
              and{" "}
              <span className="text-(--color-brand-red) italic">
                premium design
              </span>
              .
            </p>
            <p>
              We build the <span className="italic">tools</span> for your{" "}
              <span className="text-(--color-brand-red) font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-(--color-brand-red)">
                future
              </span>
              .
            </p>
          </div>
        </div>

        <div className="ds-cards-grid w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[450px] lg:min-h-[550px] transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer pt-8 px-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-(--color-brand-red) mb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                  <path
                    d="M15 15l2.5 2.5L20 15v5h-5z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Design that Converts
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 w-full lg:w-4/5 leading-relaxed">
                Intuitive interfaces that transform visitors into loyal
                customers
              </p>
            </div>

            <div className="ds-graphic flex-1 w-full relative mt-8 border-t border-l border-r border-(--color-brand-red)/30 rounded-t-2xl bg-(--color-brand-red)/5 flex justify-center pt-6 group-hover:bg-(--color-brand-red)/10 transition-colors">
              <div className="w-5/6 h-full border-t border-l border-r border-(--color-brand-red)/40 rounded-t-xl flex flex-col">
                <div className="h-8 border-b border-(--color-brand-red)/40 px-3 flex items-center">
                  <div className="w-20 h-2 border border-(--color-brand-red)/40 rounded-full"></div>
                </div>
                <div className="flex-1 flex gap-4 p-4">
                  <div className="w-1/3 border border-(--color-brand-red)/40 rounded-md"></div>
                  <div className="w-2/3 border border-(--color-brand-red)/40 rounded-md"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-8 right-8 flex flex-wrap gap-2 z-20">
              {["Prototyping", "User Research", "Design System"].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-[0.65rem] uppercase tracking-wider font-bold rounded-full border border-white/10 text-white/60 bg-[#1A1A1A]/80 backdrop-blur-sm group-hover:border-white/30 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[450px] lg:min-h-[550px] transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-(--color-brand-yellow) mb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Sell Online
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 w-full lg:w-4/5 leading-relaxed">
                Complete shops, secure payments, order management
              </p>
            </div>

            <div className="ds-graphic flex-1 w-full relative mt-8 flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="w-1/2 bg-white/5 border border-white/10 h-16 rounded-xl overflow-hidden relative">
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-linear-to-r from-transparent to-green-500/20"></div>
                  <div className="p-3">
                    <p className="text-[0.6rem] text-white/50 uppercase">
                      Total Sales
                    </p>
                    <p className="font-shrikhand text-(--color-brand-yellow) text-xl">
                      45,543€
                    </p>
                  </div>
                </div>
                <div className="w-1/2 bg-white/5 border border-white/10 h-16 rounded-xl overflow-hidden relative p-3">
                  <div className="w-full flex justify-between items-center mb-1">
                    <div className="w-6 h-4 bg-white/10 rounded"></div>
                    <div className="w-4 h-2 bg-white/10 rounded"></div>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full mb-1"></div>
                  <div className="flex justify-between w-full h-3">
                    <div className="w-1/3 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-linear-to-t from-green-500/10 to-transparent border border-white/5 rounded-xl border-b-0 rounded-b-none relative overflow-hidden group-hover:from-green-500/20 transition-colors">
                <svg
                  className="absolute inset-0 w-full h-full preserve-3d"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M0,80 Q20,70 40,60 T80,30 T100,20 L100,100 L0,100 Z"
                    fill="rgba(0,255,100,0.1)"
                    stroke="rgba(0,255,100,0.5)"
                    strokeWidth="1"
                  />
                  <circle cx="20" cy="70" r="2" fill="#00FF64" />
                  <circle cx="40" cy="60" r="2" fill="#00FF64" />
                  <circle cx="80" cy="30" r="2" fill="#00FF64" />
                </svg>
                <div className="absolute top-4 left-4 text-[0.65rem] text-[#00FF64] flex items-center gap-1 font-bold tracking-wider">
                  <span className="bg-[#00FF64] text-black px-1 rounded-sm">
                    ↗ +12%
                  </span>{" "}
                  vs last month
                </div>
              </div>
            </div>
          </div>

          <div className="ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[450px] lg:min-h-[550px] transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-purple-500 mb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                AI & Automation
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 w-full lg:w-4/5 leading-relaxed">
                Artificial intelligence and automated workflows
              </p>
            </div>

            <div className="ds-graphic flex-1 w-full relative mt-8 flex justify-center items-center">
              <div className="w-full h-full max-h-48 relative grid place-items-center">
                <svg
                  className="absolute w-full h-full opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                  viewBox="0 0 100 100"
                >
                  <line
                    x1="20"
                    y1="20"
                    x2="50"
                    y2="50"
                    stroke="purple"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="80"
                    y1="20"
                    x2="50"
                    y2="50"
                    stroke="purple"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="20"
                    y1="80"
                    x2="50"
                    y2="50"
                    stroke="purple"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="80"
                    y1="80"
                    x2="50"
                    y2="50"
                    stroke="purple"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="10"
                    y1="50"
                    x2="90"
                    y2="50"
                    stroke="purple"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="50"
                    y1="10"
                    x2="50"
                    y2="90"
                    stroke="purple"
                    strokeWidth="0.5"
                  />

                  <circle cx="20" cy="20" r="3" fill="#8b5cf6" />
                  <circle cx="80" cy="20" r="3" fill="#8b5cf6" />
                  <circle cx="20" cy="80" r="3" fill="#8b5cf6" />
                  <circle cx="80" cy="80" r="3" fill="#8b5cf6" />
                  <circle cx="10" cy="50" r="2" fill="#8b5cf6" />
                  <circle cx="90" cy="50" r="2" fill="#8b5cf6" />
                  <circle cx="50" cy="10" r="2" fill="#8b5cf6" />
                  <circle cx="50" cy="90" r="2" fill="#8b5cf6" />
                  <circle
                    cx="50"
                    cy="50"
                    r="4"
                    fill="#a855f7"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-6 left-8 right-8 flex flex-wrap gap-2 z-20">
              {["Machine Learning", "Automations"].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-[0.65rem] uppercase tracking-wider font-bold rounded-full border border-purple-500/30 text-purple-400 bg-purple-900/10 backdrop-blur-sm group-hover:border-purple-500/60 group-hover:bg-purple-900/20 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="ds-cards-grid w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[450px] lg:col-span-1 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-(--color-brand-red) mb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Websites
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 w-full leading-relaxed">
                Responsive, high-performance, mobile-first
              </p>
            </div>

            <div className="ds-graphic flex-1 w-full relative mt-8 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-xl h-full w-full p-2 flex flex-col group-hover:bg-white/10 transition-colors">
                <div className="flex gap-1.5 mb-2 px-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-white/5 rounded-lg border border-white/10 flex justify-center items-center">
                  <div className="w-24 h-28 bg-(--color-brand-cream)/5 border border-(--color-brand-cream)/10 rounded-lg shadow-lg flex flex-col justify-start p-2">
                    <div className="w-10 h-1 bg-(--color-brand-cream)/20 rounded-full mb-4 mx-auto mt-2"></div>
                    <div className="w-full flex-1 bg-(--color-brand-cream)/10 rounded shrink-0"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between px-3 py-2 bg-black/40 border border-white/5 rounded-full z-20">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-(--color-brand-red) transition-colors"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-(--color-brand-red) transition-colors delay-75"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-(--color-brand-red) transition-colors delay-150"></div>
              </div>
              <span className="text-[0.65rem] text-white/30 font-mono tracking-widest">
                &lt;div className='respons...'&gt;
              </span>
            </div>
          </div>

          <div className="ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[450px] lg:col-span-2 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-green-500 mb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Custom Software
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 w-full lg:w-3/4 leading-relaxed">
                CRM, analytics dashboards, end-to-end business management
              </p>
            </div>

            <div className="ds-graphic flex-1 w-full relative mt-8 flex flex-col justify-between gap-6">
              <div className="flex gap-4 h-32 lg:h-40">
                <div className="w-1/3 bg-white/5 border border-white/10 rounded-2xl flex flex-col p-4">
                  <p className="text-[0.6rem] text-white/40 uppercase font-bold tracking-widest mb-1">
                    Active Clients
                  </p>
                  <p className="text-3xl lg:text-4xl text-green-500 font-bold mb-4 group-hover:scale-105 transition-transform origin-left">
                    +234
                  </p>
                  <div className="mt-auto space-y-2">
                    <div className="flex justify-between items-center text-[0.65rem]">
                      <span className="text-white/40">Premium</span>
                      <span className="text-white/80">87</span>
                    </div>
                    <div className="flex justify-between items-center text-[0.65rem]">
                      <span className="text-white/40">Basic</span>
                      <span className="text-white/80">147</span>
                    </div>
                  </div>
                </div>
                <div className="w-2/3 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-end justify-between gap-2 lg:gap-4 pb-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors"></div>
                  <div className="w-1/6 bg-green-900/30 border-t border-l border-r border-green-500/30 rounded-t-lg h-[40%] group-hover:bg-green-800/50 transition-colors"></div>
                  <div className="w-1/6 bg-green-900/30 border-t border-l border-r border-green-500/30 rounded-t-lg h-[60%] group-hover:bg-green-800/50 transition-colors"></div>
                  <div className="w-1/6 bg-green-900/30 border-t border-l border-r border-green-500/30 rounded-t-lg h-[30%] group-hover:bg-green-800/50 transition-colors"></div>
                  <div className="w-1/6 bg-green-900/30 border-t border-l border-r border-green-500/30 rounded-t-lg h-[80%] group-hover:bg-green-800/50 transition-colors"></div>
                  <div className="w-1/6 bg-green-900/30 border-t border-l border-r border-green-500/30 rounded-t-lg h-[40%] group-hover:bg-green-800/50 transition-colors"></div>
                  <div className="w-1/6 bg-green-900/30 border-t border-l border-r border-green-500/30 rounded-t-lg h-[100%] group-hover:bg-green-800/50 transition-colors"></div>
                </div>
              </div>

              <div className="flex flex-col gap-3 flex-1 lg:pr-48 relative">
                <div className="flex items-center gap-4">
                  <div className="w-20 text-[0.65rem] text-white/50 uppercase tracking-widest font-bold">
                    Orders
                  </div>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500/60 w-[70%] group-hover:w-[85%] transition-all duration-1000 ease-out"></div>
                  </div>
                  <div className="w-8 text-right text-[0.7rem] font-mono opacity-80">
                    142
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-[0.65rem] text-white/50 uppercase tracking-widest font-bold">
                    Invoices
                  </div>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500/60 w-[45%] group-hover:w-[60%] transition-all duration-1000 ease-out delay-100"></div>
                  </div>
                  <div className="w-8 text-right text-[0.7rem] font-mono opacity-80">
                    89
                  </div>
                </div>

                <div className="absolute right-0 top-0 lg:bottom-0 lg:top-auto h-24 w-40 bg-[#1A1A1A] border border-white/10 shadow-2xl rounded-2xl p-4 flex flex-col justify-center group-hover:-translate-y-2 transition-transform duration-500">
                  <p className="text-[0.6rem] text-white/40 uppercase font-bold tracking-widest mb-1">
                    Operations/month
                  </p>
                  <p className="text-3xl text-[#00FF64] font-shrikhand italic tracking-tight">
                    35,130
                  </p>
                  <p className="text-[0.6rem] text-[#00FF64]/70 mt-1 flex items-center gap-1">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12l5 5L20 7"></path>
                    </svg>{" "}
                    Automated
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-8 flex gap-2 z-20">
              {["Dashboard", "Analytics", "Reports"].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-[0.6rem] uppercase tracking-wider font-bold rounded-full border border-green-500/20 text-green-500/70 hover:bg-green-500/10 hover:text-green-500 transition-colors cursor-pointer"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;
