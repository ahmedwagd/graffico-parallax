import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const marqueeItemsRow1 = [
  {
    icon: "C",
    color: "bg-red-500/20 text-red-500",
    title: "Custom CRM for SMBs",
    desc: "Stop chasing customers. Let the system do the dirty work for you.",
  },
  {
    icon: "B",
    color: "bg-orange-500/20 text-orange-500",
    title: "Business KPI Dashboards",
    desc: "Make decisions based on data, not feelings. Visualize your...",
  },
  {
    icon: "C",
    color: "bg-red-500/20 text-red-500",
    title: "Customer Email Automation",
    desc: "Improve post-sales experience and increase repeat purchases...",
  },
  {
    icon: "C",
    color: "bg-red-500/20 text-red-500",
    title: "Construction Management",
    desc: "Control costs, materials, and deadlines of your construction...",
  },
  {
    icon: "A",
    color: "bg-red-500/20 text-red-500",
    title: "Automated Invoicing",
    desc: "Simplify your accounting natively.",
  },
];

const marqueeItemsRow2 = [
  {
    icon: "C",
    color: "bg-yellow-500/20 text-yellow-500",
    title: "Customer Support Interface",
    desc: "Help customers instantly with agents who truly...",
  },
  {
    icon: "R",
    color: "bg-yellow-500/20 text-yellow-500",
    title: "Rental Management Software",
    desc: "Optimize fleet and equipment availability in real-time.",
  },
  {
    icon: "C",
    color: "bg-yellow-500/20 text-yellow-500",
    title: "Corporate E-learning Platform",
    desc: "Organize company knowledge and train your employees at...",
  },
  {
    icon: "I",
    color: "bg-yellow-500/20 text-yellow-500",
    title: "Invoicing Software for Pros",
    desc: "Automate billing and debt collection for law firms,...",
  },
  {
    icon: "E",
    color: "bg-yellow-500/20 text-yellow-500",
    title: "Expense Analysis Automation",
    desc: "Eliminate paper expense reports and track every company spend...",
  },
];

const marqueeItemsRow3 = [
  {
    icon: "S",
    color: "bg-red-500/20 text-red-500",
    title: "Sentiment Analysis",
    desc: "Analyze what People say about your brand and anticipate trends...",
  },
  {
    icon: "A",
    color: "bg-red-500/20 text-red-500",
    title: "Access Control & Badges",
    desc: "Manage physical access and security of your company with a...",
  },
  {
    icon: "E",
    color: "bg-red-500/20 text-red-500",
    title: "Executive Report Automation",
    desc: "Automatically generate comprehensive management...",
  },
  {
    icon: "C",
    color: "bg-red-500/20 text-red-500",
    title: "Corporate Event Management",
    desc: "Organize conferences, trade shows, and corporate meetings...",
  },
  {
    icon: "P",
    color: "bg-red-500/20 text-red-500",
    title: "Project Collaboration Portal",
    desc: "Coordinate complex projects with clients, partners, and suppliers in...",
  },
];

const MarqueeRow = ({ items, reverse = false, speed = "slow" }) => {
  return (
    <div className="flex overflow-hidden w-full select-none gap-4">
      <div
        className={`flex shrink-0 gap-4 min-w-full justify-around ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            className="flex items-center gap-4 bg-[#111111] border border-white/5 rounded-2xl p-4 w-85 shrink-0 hover:bg-[#1A1A1A] transition-colors cursor-pointer group"
          >
            <div
              className={`w-10 h-10 rounded flex items-center justify-center font-bold text-lg shrink-0 ${item.color} group-hover:scale-110 transition-transform`}
            >
              {item.icon}
            </div>
            <div className="flex flex-col flex-1 overflow-hidden">
              <h4 className="text-white font-bold text-sm truncate w-full">
                {item.title}
              </h4>
              <p className="text-white/40 text-[0.65rem] truncate w-full">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className={`flex shrink-0 gap-4 min-w-full justify-around ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((item, idx) => (
          <div
            key={`dup-${item.title}-${idx}`}
            className="flex items-center gap-4 bg-[#111111] border border-white/5 rounded-2xl p-4 w-85 shrink-0 hover:bg-[#1A1A1A] transition-colors cursor-pointer group"
          >
            <div
              className={`w-10 h-10 rounded flex items-center justify-center font-bold text-lg shrink-0 ${item.color} group-hover:scale-110 transition-transform`}
            >
              {item.icon}
            </div>
            <div className="flex flex-col flex-1 overflow-hidden">
              <h4 className="text-white font-bold text-sm truncate w-full">
                {item.title}
              </h4>
              <p className="text-white/40 text-[0.65rem] truncate w-full">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MoreSpecific = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".marquee-container", {
        xPercent: -15,
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
      <div className="max-container w-full px-4 md:px-6 lg:px-12 mx-auto flex flex-col mb-16">
        <div className="flex items-center mb-6">
          <span className="flex items-center gap-2 px-3 py-1 bg-[#2a0f0d] text-[#ff4c3b] rounded-full text-[0.6rem] font-bold tracking-widest uppercase border border-[#ff4c3b]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4c3b]"></span>
            60+ Solutions
          </span>
        </div>

        <h2 className="font-shrikhand font-bold italic text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-(--color-brand-cream) mb-6">
          Looking for Something{" "}
          <span className="text-(--color-brand-red)">More Specific?</span>
        </h2>

        <p className="font-sans text-base md:text-lg text-white/50 mb-10 w-full max-w-lg">
          Explore our catalog of custom software solutions for your business.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <button className="px-6 py-3 bg-[#e8402c] hover:bg-[#cf3523] text-white rounded-full font-bold text-sm tracking-wide transition-colors flex items-center gap-2 hover:gap-3 group">
            Explore Solutions{" "}
            <span className="transition-all text-white/70 group-hover:text-white">
              →
            </span>
          </button>

          <button className="px-6 py-3 bg-transparent border border-white/10 hover:border-white/30 text-white rounded-full font-bold text-sm tracking-wide transition-colors flex items-center gap-2 hover:gap-3 group">
            Consultancy{" "}
            <span className="transition-all text-white/40 group-hover:text-white">
              →
            </span>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 mt-8 px-4 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-(--color-brand-bg) to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-(--color-brand-bg) to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-container flex flex-col gap-4 -ml-24 w-[110vw]">
          <MarqueeRow items={marqueeItemsRow1} reverse={false} />
          <MarqueeRow items={marqueeItemsRow2} reverse={true} />
          <MarqueeRow items={marqueeItemsRow3} reverse={false} />
        </div>
      </div>
    </section>
  );
};

export default MoreSpecific;
