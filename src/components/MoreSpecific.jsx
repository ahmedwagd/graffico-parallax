import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const makeItem = (icon, color, title, desc) => ({ icon, color, title, desc });

const ROW_1 = [
  makeItem(
    "C",
    "bg-red-500/20 text-red-500",
    "Custom CRM for SMBs",
    "Stop chasing customers. Let the system do the dirty work for you.",
  ),
  makeItem(
    "B",
    "bg-orange-500/20 text-orange-500",
    "Business KPI Dashboards",
    "Make decisions based on data, not feelings. Visualize your...",
  ),
  makeItem(
    "C",
    "bg-red-500/20 text-red-500",
    "Customer Email Automation",
    "Improve post-sales experience and increase repeat purchases...",
  ),
  makeItem(
    "C",
    "bg-red-500/20 text-red-500",
    "Construction Management",
    "Control costs, materials, and deadlines of your construction...",
  ),
  makeItem(
    "A",
    "bg-red-500/20 text-red-500",
    "Automated Invoicing",
    "Simplify your accounting natively.",
  ),
];
const ROW_2 = [
  makeItem(
    "C",
    "bg-yellow-500/20 text-yellow-500",
    "Customer Support Interface",
    "Help customers instantly with agents who truly...",
  ),
  makeItem(
    "R",
    "bg-yellow-500/20 text-yellow-500",
    "Rental Management Software",
    "Optimize fleet and equipment availability in real-time.",
  ),
  makeItem(
    "C",
    "bg-yellow-500/20 text-yellow-500",
    "Corporate E-learning Platform",
    "Organize company knowledge and train your employees at...",
  ),
  makeItem(
    "I",
    "bg-yellow-500/20 text-yellow-500",
    "Invoicing Software for Pros",
    "Automate billing and debt collection for law firms,...",
  ),
  makeItem(
    "E",
    "bg-yellow-500/20 text-yellow-500",
    "Expense Analysis Automation",
    "Eliminate paper expense reports and track every company spend...",
  ),
];
const ROW_3 = [
  makeItem(
    "S",
    "bg-red-500/20 text-red-500",
    "Sentiment Analysis",
    "Analyze what People say about your brand and anticipate trends...",
  ),
  makeItem(
    "A",
    "bg-red-500/20 text-red-500",
    "Access Control & Badges",
    "Manage physical access and security of your company with a...",
  ),
  makeItem(
    "E",
    "bg-red-500/20 text-red-500",
    "Executive Report Automation",
    "Automatically generate comprehensive management...",
  ),
  makeItem(
    "C",
    "bg-red-500/20 text-red-500",
    "Corporate Event Management",
    "Organize conferences, trade shows, and corporate meetings...",
  ),
  makeItem(
    "P",
    "bg-red-500/20 text-red-500",
    "Project Collaboration Portal",
    "Coordinate complex projects with clients, partners, and suppliers in...",
  ),
];

/* ─────────────────────────────────────────────────────────────
   MARQUEE ROW
───────────────────────────────────────────────────────────── */
const MarqueeCard = ({ icon, color, title, desc }) => (
  <div className="flex items-center gap-4 bg-[#111111] border border-white/5 rounded-2xl p-4 w-85 shrink-0 hover:bg-[#1A1A1A] transition-colors cursor-pointer group">
    <div
      className={`w-10 h-10 rounded flex items-center justify-center font-bold text-lg shrink-0 ${color} group-hover:scale-110 transition-transform`}
    >
      {icon}
    </div>
    <div className="flex flex-col flex-1 overflow-hidden">
      <h4 className="text-white font-bold text-sm truncate">{title}</h4>
      <p className="text-white/40 text-[0.65rem] truncate">{desc}</p>
    </div>
  </div>
);

const MarqueeRow = ({ items, reverse = false }) => {
  const cls = reverse ? "animate-marquee-reverse" : "animate-marquee";
  const rendered = items.map((item, i) => <MarqueeCard key={i} {...item} />);

  return (
    <div className="flex overflow-hidden w-full select-none gap-4">
      <div className={`flex shrink-0 gap-4 min-w-full justify-around ${cls}`}>
        {rendered}
      </div>
      {/* duplicate for seamless loop */}
      <div
        className={`flex shrink-0 gap-4 min-w-full justify-around ${cls}`}
        aria-hidden
      >
        {rendered}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────────── */
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
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#ff4c3b]"
              aria-hidden
            />
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
            <span className="text-white/70 group-hover:text-white transition-all">
              →
            </span>
          </button>
          <button className="px-6 py-3 bg-transparent border border-white/10 hover:border-white/30 text-white rounded-full font-bold text-sm tracking-wide transition-colors flex items-center gap-2 hover:gap-3 group">
            Consultancy{" "}
            <span className="text-white/40 group-hover:text-white transition-all">
              →
            </span>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 mt-8 px-4 overflow-hidden relative">
        {/* edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-(--color-brand-bg) to-transparent z-10 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-(--color-brand-bg) to-transparent z-10 pointer-events-none"
          aria-hidden
        />

        <div className="marquee-container flex flex-col gap-4 -ml-24 w-[110vw]">
          <MarqueeRow items={ROW_1} />
          <MarqueeRow items={ROW_2} reverse />
          <MarqueeRow items={ROW_3} />
        </div>
      </div>
    </section>
  );
};

export default MoreSpecific;
