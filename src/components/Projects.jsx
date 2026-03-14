import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LaptopMockup = ({ children, className }) => (
  <div className={`relative z-10 ${className}`}>
    <div className="w-75 md:w-112.5 lg:w-150 aspect-16/10 bg-[#111] rounded-t-xl md:rounded-t-2xl border-4 md:border-[6px] border-[#2a2a2a] relative overflow-hidden">
      {children}
    </div>
    <div className="w-85 md:w-127.5 lg:w-170 h-2.5 md:h-4 bg-[#d4d4d4] rounded-b-lg md:rounded-b-2xl -ml-5 md:-ml-7.5 lg:-ml-10 relative shadow-2xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 md:h-2 bg-[#A0A0A0] rounded-b-md"></div>
    </div>
  </div>
);

const PhoneMockup = ({ children, className }) => (
  <div className={`relative z-20 ${className}`}>
    <div className="w-35 md:w-45 lg:w-55 aspect-[1/2.1] bg-[#111] rounded-3xl md:rounded-4xl border-4 md:border-[6px] border-[#2a2a2a] relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-20 h-4 md:h-5 bg-[#2a2a2a] rounded-b-2xl z-20"></div>
      <div className="w-full h-full relative z-10 bg-white">{children}</div>
      <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-10 md:w-16 h-1 bg-white/50 rounded-full z-20"></div>
    </div>
  </div>
);

const Icon = ({ path, className }) => (
  <svg
    className={`absolute ${className} text-(--color-brand-red)`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={path} />
  </svg>
);

const GhostText = ({ text, className, speed }) => (
  <span
    className={`absolute font-shrikhand italic text-[#d4c5b0] opacity-50 select-none z-0 parallax-layer ${className}`}
    data-speed={speed}
  >
    {text}
  </span>
);

const Projects = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".float-icon", {
        y: "random(-15, 15)",
        x: "random(-15, 15)",
        rotation: "random(-20, 20)",
        duration: "random(4, 6)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      const wrapper = document.querySelector(".horizontal-scroll-wrapper");
      const scrollContainer = document.querySelector(
        ".horizontal-scroll-container",
      );

      if (!wrapper || !scrollContainer) return;

      const getScrollAmount = () => -(wrapper.scrollWidth - window.innerWidth);

      const scrollTween = gsap.to(wrapper, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainer,
          start: "top top",
          end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      const parallaxElements = gsap.utils.toArray(".parallax-layer");
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.dataset.speed) || 0;
        if (speed !== 0) {
          gsap.to(el, {
            x: () => window.innerWidth * speed,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest(".project-cluster") || el,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
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
      id="projects"
      ref={container}
      className="relative w-full bg-[#E8DAD0] text-[#101011] overflow-hidden z-20"
    >
      <div className="horizontal-scroll-container w-full h-screen flex items-center overflow-hidden bg-[#E8DAD0]">
        <div className="horizontal-scroll-wrapper relative flex flex-nowrap items-center h-full w-max z-10">
          <div className="relative w-screen h-screen shrink-0 flex flex-col items-center justify-center px-4 z-40 bg-[#E8DAD0]">
            <div className="absolute inset-0 max-w-5xl mx-auto pointer-events-none">
              <Icon
                path="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
                className="float-icon w-8 h-8 md:w-12 md:h-12 top-[30%] left-[20%] -rotate-12"
              />
              <Icon
                path="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
                className="float-icon w-6 h-6 md:w-10 md:h-10 top-[25%] left-[30%] rotate-12"
              />
              <Icon
                path="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                className="float-icon w-10 h-10 md:w-14 md:h-14 top-[35%] right-[25%] -rotate-6"
              />
              <Icon
                path="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z"
                className="float-icon w-8 h-8 md:w-12 md:h-12 top-[45%] right-[15%] rotate-12"
              />
              <Icon
                path="M13.5 10.5L21 3M16 3h5v5M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3"
                className="float-icon w-8 h-8 md:w-12 md:h-12 bottom-[30%] right-[20%] -rotate-12"
              />
              <Icon
                path="M9 18c-4.51 2-5-2-7-2"
                className="float-icon w-10 h-10 md:w-14 md:h-14 bottom-[20%] right-[30%] rotate-6"
              />
              <Icon
                path="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
                className="float-icon w-6 h-6 md:w-10 md:h-10 bottom-[30%] left-[25%] rotate-12"
              />
              <Icon
                path="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                className="float-icon w-8 h-8 md:w-12 md:h-12 bottom-[20%] left-[35%] -rotate-12"
              />
              <Icon
                path="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                className="float-icon w-10 h-10 md:w-16 md:h-16 top-[45%] left-[15%] rotate-12"
              />
            </div>

            <h1 className="text-center font-shrikhand font-bold italic text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] z-10 w-full max-w-5xl mx-auto px-4 mt-8">
              Explore some of our <br />
              <span className="text-(--color-brand-red)">featured work</span>
            </h1>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <span className="text-[0.6rem] font-bold tracking-widest uppercase text-[#101011]">
                Scroll to discover
              </span>
              <div className="w-6 h-10 border-2 border-[#101011] rounded-full flex justify-center p-1 opacity-50">
                <div className="w-1.5 h-1.5 bg-(--color-brand-red) rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-[100vw] w-full pointer-events-none z-0">
            <GhostText
              text="Efficiency"
              className="text-[12rem] lg:text-[18rem] top-[5%] left-[2%]"
              speed="-0.15"
            />
            <GhostText
              text="Design"
              className="text-[8rem] lg:text-[14rem] bottom-[10%] left-[15%]"
              speed="0.1"
            />
            <GhostText
              text="Automation"
              className="text-[10rem] lg:text-[16rem] top-[15%] left-[30%]"
              speed="-0.2"
            />
            <GhostText
              text="Creativity"
              className="text-[10rem] lg:text-[16rem] bottom-[5%] left-[45%]"
              speed="0.15"
            />
            <GhostText
              text="SEO"
              className="text-[14rem] lg:text-[20rem] top-[5%] left-[60%]"
              speed="-0.25"
            />
            <GhostText
              text="Optimization"
              className="text-[10rem] lg:text-[14rem] top-[25%] left-[75%]"
              speed="-0.1"
            />
            <GhostText
              text="Speed"
              className="text-[12rem] lg:text-[16rem] bottom-[10%] left-[85%]"
              speed="0.2"
            />
          </div>

          <div className="project-cluster relative w-[80vw] md:w-[60vw] lg:w-200 shrink-0 min-h-[500px] flex items-center justify-center ml-[10vw]">
            <div className="relative flex items-center justify-center w-full mt-12">
              <LaptopMockup
                className="parallax-layer -translate-y-4 md:-translate-y-8"
                data-speed="0.1"
              >
                <div className="w-full h-full bg-[#111] p-4 font-sans text-white text-xs relative flex flex-col items-center justify-center border-t border-white/5">
                  <div className="absolute top-0 inset-x-0 h-10 bg-black/80 backdrop-blur border-b border-white/10 px-4 flex items-center justify-between">
                    <div className="text-(--color-brand-cream) font-shrikhand text-sm">
                      RG
                    </div>
                    <div className="w-32 h-1.5 bg-white/10 rounded"></div>
                  </div>
                  <h2 className="text-xl md:text-3xl font-serif mt-4 text-center px-4 leading-tight">
                    La tua casa dei sogni
                    <br />
                    diventa realtà.
                  </h2>
                  <div className="w-1/2 h-px bg-white/20 my-6"></div>
                  <div className="flex gap-4">
                    <div className="w-16 md:w-24 h-8 bg-white/10 rounded-full"></div>
                    <div className="w-16 md:w-24 h-8 bg-transparent border border-white/20 rounded-full"></div>
                  </div>
                </div>
              </LaptopMockup>

              <PhoneMockup
                className="parallax-layer absolute -right-4 md:-right-16 lg:-right-8 bottom-[-40px] md:-bottom-16 rotate-[-4deg]"
                data-speed="0.3"
              >
                <div className="w-full h-full bg-white text-black p-4 md:p-6 flex flex-col items-center relative">
                  <div className="w-full flex justify-between items-center mt-6 mb-6">
                    <div className="font-shrikhand text-xl">GR</div>
                    <div className="flex gap-1">
                      <div className="w-4 h-0.5 bg-black"></div>
                      <div className="w-4 h-0.5 bg-black"></div>
                    </div>
                  </div>
                  <h3 className="text-center font-serif text-[11px] md:text-sm italic mb-4 leading-relaxed tracking-wide">
                    "Un prodotto eccezionale: la copertura e la luminosita del
                    colore superano ogni aspettativa. L'eccellenza si vede ad
                    ogni applicazione."
                  </h3>
                  <div className="w-1/2 h-px bg-black/20 my-4"></div>
                  <div className="text-center opacity-50 text-[8px] md:text-[10px]">
                    Mario Rossi
                    <br />
                    Partner
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          <div className="project-cluster relative w-[80vw] md:w-[60vw] lg:w-200 shrink-0 min-h-[500px] flex items-center justify-center">
            <div className="relative flex items-center justify-center w-full mt-0">
              <LaptopMockup
                className="parallax-layer -translate-y-2"
                data-speed="0.15"
              >
                <div className="w-full h-full bg-slate-800 flex flex-col text-white">
                  <div className="h-12 border-b border-white/10 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur">
                    <span className="font-sans font-bold tracking-widest text-xs md:text-sm flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                      </svg>{" "}
                      EDILMONTA
                    </span>
                    <div className="w-6 h-1 bg-white/30"></div>
                  </div>
                  <div className="flex-1 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
                      alt="house"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex flex-col justify-center p-8">
                      <h2 className="text-xl md:text-3xl font-bold mb-2">
                        Costruisci il tuo futuro
                      </h2>
                      <p className="text-xs md:text-sm text-white/70 max-w-xs">
                        Soluzioni edili all'avanguardia per ogni tua esigenza.
                      </p>
                    </div>
                  </div>
                </div>
              </LaptopMockup>

              <PhoneMockup
                className="parallax-layer absolute left-0 md:-left-12 lg:-left-4 bottom-[-60px] md:-bottom-12 rotate-[6deg] z-30"
                data-speed="0.35"
              >
                <div className="w-full h-full bg-white text-black p-4 flex flex-col relative overflow-hidden">
                  <div className="h-20 md:h-28 bg-slate-100 -mx-4 -mt-4 mb-4 relative flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=300"
                      alt="house mobile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-sm md:text-base mb-1 flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white">
                      ✓
                    </div>{" "}
                    General Contractor
                  </h3>
                  <p className="text-[9px] md:text-[11px] text-gray-500 leading-tight mb-4 pr-4">
                    Un unico referente per gli interventi affidabili e sicuri
                    chiavi in mano.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-auto pb-6">
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <span className="text-lg md:text-2xl font-bold block mb-1">
                        28+
                      </span>
                      <span className="text-[6px] md:text-[8px] uppercase font-bold text-gray-400">
                        Anni Esperienza
                      </span>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <span className="text-lg md:text-2xl font-bold block mb-1">
                        99+
                      </span>
                      <span className="text-[6px] md:text-[8px] uppercase font-bold text-gray-400">
                        Progetti
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-5 h-5 md:w-6 md:h-6"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L3 22l4.14-.94A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.5 14.5c-.28.78-1.57 1.44-2.22 1.5-.6.06-1.39.22-3.81-.8-2.92-1.23-4.81-4.24-4.96-4.44-.14-.2-1.18-1.58-1.18-3.01 0-1.43.74-2.14 1-2.42.26-.28.56-.35.75-.35s.38 0 .56.02c.2.02.45-.08.7.53.28.66.9 2.22.98 2.38.08.16.14.35.04.55-.1.2-.16.32-.32.5l-.48.56c-.16.18-.34.38-.14.73.2.35.9 1.48 1.92 2.38 1.3 1.15 2.41 1.5 2.75 1.66.35.16.56.14.77-.1.2-.24.9-1.05 1.15-1.4.24-.35.49-.3.81-.18.32.12 2.06.98 2.42 1.16.36.18.6.28.68.44.08.16.08.92-.2 1.7z" />
                    </svg>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          <div className="project-cluster relative w-[80vw] md:w-[60vw] lg:w-200 shrink-0 min-h-[500px] flex items-center justify-center">
            <div className="relative flex items-center justify-center w-full mt-4">
              <LaptopMockup
                className="parallax-layer translate-y-2 md:translate-y-4"
                data-speed="0.2"
              >
                <div className="w-full h-full bg-[#f4f4f4] flex flex-col text-black border-t-4 border-(--color-brand-red)">
                  <div className="h-14 flex items-center justify-between px-8 bg-white shadow-sm z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-(--color-brand-red) flex items-center justify-center rounded-sm">
                        <span className="text-white text-[8px] font-bold">
                          IMG
                        </span>
                      </div>
                      <span className="font-bold text-sm tracking-wide">
                        ALMA
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-[10px] font-bold">ABOUT</div>
                      <div className="text-[10px] font-bold">CASES</div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center relative overflow-hidden">
                    <h2 className="text-3xl md:text-5xl font-bold text-center z-10 leading-tight">
                      Sei pronto a diventare
                      <br />
                      <span className="text-green-500 italic">
                        un nodo della rete?
                      </span>
                    </h2>
                    <div className="mt-8 flex gap-4 z-10">
                      <div className="px-6 py-2 bg-black text-white text-[10px] rounded-full">
                        ENTRA ORA
                      </div>
                    </div>
                  </div>
                </div>
              </LaptopMockup>

              <PhoneMockup
                className="parallax-layer absolute right-2 md:-right-8 lg:-right-4 bottom-[-50px] md:-bottom-20 rotate-[-3deg] z-30"
                data-speed="0.4"
              >
                <div className="w-full h-full bg-[#111] text-white flex flex-col relative px-4 pb-0 overflow-hidden">
                  <div className="h-16 flex items-center justify-between border-b border-white/10 mt-6 z-20 relative">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-black"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <span className="font-bold text-xs tracking-wider">
                        ALMA
                      </span>
                    </div>
                    <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
                      <div className="w-3 h-px bg-white"></div>
                    </div>
                  </div>

                  <div className="flex-1 mt-6 z-20 relative">
                    <h3 className="font-bold text-lg md:text-xl leading-tight">
                      COSTRUISCI IL
                      <br />
                      CAMBIAMENTO
                    </h3>
                    <p className="text-[8px] md:text-[10px] mt-4 leading-relaxed text-white/50 w-4/5 uppercase tracking-wider">
                      Unisciti a chi sta gia facendo la differenza. Insieme,
                      creiamo valori reali.
                    </p>
                  </div>

                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full opacity-40 z-10 pointer-events-none"
                  >
                    <path
                      d="M -20 60 Q 50 20 120 70"
                      stroke="#22c55e"
                      strokeWidth="2"
                      fill="none"
                      className="drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                    />
                    <path
                      d="M -20 80 Q 50 40 120 90"
                      stroke="#22c55e"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.5"
                    />
                    <path
                      d="M -20 40 Q 50 90 120 30"
                      stroke="#22c55e"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />
                  </svg>

                  <div className="h-1/3 bg-black/80 backdrop-blur-sm z-20 flex flex-col justify-end p-4 border-t border-white/5 pb-8">
                    <p className="text-[7px] text-center text-white/40 mb-2 tracking-widest uppercase">
                      Philosophy
                    </p>
                    <p className="text-[9px] text-center italic text-white/80">
                      Non ti chiediamo di cambiare. Ti diamo i motivi per farlo.
                    </p>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          <div className="project-cluster relative w-[80vw] md:w-[60vw] lg:w-200 shrink-0 min-h-[500px] flex items-center justify-center">
            <div className="relative flex items-center justify-center w-full mt-0 z-20">
              <LaptopMockup
                className="parallax-layer -translate-y-4"
                data-speed="0.25"
              >
                <div className="w-full h-full bg-[#f8f6f0] text-[#111] overflow-hidden relative">
                  <div className="absolute right-0 top-0 w-1/2 h-full bg-[#e8edeb] rounded-bl-[100px] flex flex-col items-center justify-center p-4 xl:p-8">
                    <h2 className="text-xl md:text-3xl font-serif mb-2 text-center leading-tight">
                      Scopri
                      <br />
                      Civico 8
                    </h2>
                    <div className="w-8 md:w-12 h-0.5 bg-[#111] mt-4"></div>
                  </div>
                  <div className="p-6 md:p-8 w-1/2 flex flex-col h-full bg-white relative z-10 rounded-tr-[60px] shadow-[10px_0_30px_rgba(0,0,0,0.05)] border-r border-[#f8f6f0]">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#3d6ca1] font-bold">
                      CIVICO 8
                    </span>
                    <p className="mt-8 md:mt-12 font-serif leading-relaxed text-[11px] md:text-sm text-gray-600">
                      A unique experience in the heart of Emilia, where elegance
                      meets absolute comfort.
                    </p>
                  </div>
                </div>
              </LaptopMockup>

              <PhoneMockup
                className="parallax-layer absolute left-0 md:-left-12 lg:-left-2 bottom-[-80px] md:-bottom-24 rotate-[8deg] z-30"
                data-speed="0.45"
              >
                <div className="w-full h-full bg-[#f8f6f0] text-[#111] flex flex-col relative px-4 pb-4">
                  <div className="h-10 md:h-16 flex items-center justify-center border-b border-black/10 mt-4 md:mt-6">
                    <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest">
                      CIVICO 8
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-sm md:text-xl mt-6 px-2">
                    Discover Civico 8
                  </h3>
                  <p className="text-[8px] md:text-[10px] mt-3 leading-relaxed opacity-70 px-2 font-serif">
                    A unique experience in the heart of Reggio Emilia, where
                    elegance meets comfort.
                  </p>

                  <div className="bg-[#e8edeb] mt-6 rounded-t-[2rem] h-28 md:h-44 flex items-end justify-center pb-4 w-[calc(100%+2rem)] -ml-4 shadow-inner relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                      alt="house"
                      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-70"
                    />
                  </div>
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 md:w-36 py-2 md:py-3 bg-[#111] text-white text-[8px] md:text-[10px] uppercase tracking-widest rounded-full hover:bg-black transition-colors">
                    Book Now
                  </button>
                </div>
              </PhoneMockup>
            </div>
          </div>

          <div className="w-[10vw] shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
