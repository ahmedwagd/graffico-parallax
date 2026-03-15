import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText } from "../lib/gsap";

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────── */
const DESIGN_PILLS = ["Prototyping", "User Research", "Design System"];
const AI_PILLS = ["Machine Learning", "Automations"];
const SOFTWARE_PILLS = ["Dashboard", "Analytics", "Reports"];
const BAR_HEIGHTS = [40, 60, 30, 80, 40, 100];
const CHART_DOTS = [
  [20, 42],
  [40, 32],
  [60, 22],
  [80, 12],
  [100, 8],
];
const PROGRESS_ROWS = [
  { label: "Orders", color: "bg-green-500/60", target: "85%", count: 142 },
  { label: "Invoices", color: "bg-yellow-500/60", target: "60%", count: 89 },
];

/* ─────────────────────────────────────────────────────────────
   SMALL REUSABLES
───────────────────────────────────────────────────────────── */
const Pill = ({ label, className }) => (
  <span
    className={`px-3 py-1 text-[0.65rem] uppercase tracking-wider font-bold rounded-full border backdrop-blur-sm transition-colors duration-300 ${className}`}
  >
    {label}
  </span>
);

/* ─────────────────────────────────────────────────────────────
   GRAPHIC: mock browser (Design card)
───────────────────────────────────────────────────────────── */
const DesignGraphic = () => (
  <div className="ds-graphic flex-1 w-full relative mt-8 border-t border-l border-r border-(--color-brand-red)/30 rounded-t-2xl bg-(--color-brand-red)/5 flex justify-center pt-6 group-hover:bg-(--color-brand-red)/10 transition-colors duration-500 overflow-hidden">
    {/* scan line — animated via GSAP */}
    <span
      className="ds-scanline absolute top-0 left-0 right-0 h-px bg-(--color-brand-red)/40 pointer-events-none"
      aria-hidden
    />

    <div className="w-5/6 h-full border-t border-l border-r border-(--color-brand-red)/40 rounded-t-xl flex flex-col">
      {/* browser chrome */}
      <div className="h-8 border-b border-(--color-brand-red)/40 px-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          {[
            "bg-(--color-brand-red)/60",
            "bg-(--color-brand-red)/30",
            "bg-(--color-brand-red)/20",
          ].map((c, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
          ))}
        </div>
        <div className="flex-1 mx-2 h-3.5 border border-(--color-brand-red)/30 rounded-full px-2 flex items-center">
          <div
            className="ds-url-bar w-12 h-1 bg-(--color-brand-red)/30 rounded-full"
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>

      {/* content */}
      <div className="flex-1 flex gap-3 p-3">
        {/* sidebar skeleton */}
        <div className="w-1/3 flex flex-col gap-2">
          {[80, 65, 75, 55].map((w, i) => (
            <div
              key={i}
              className="ds-bar h-4 border border-(--color-brand-red)/40 rounded"
              style={{ width: `${w}%`, transformOrigin: "left" }}
            />
          ))}
        </div>

        {/* main area */}
        <div className="w-2/3 flex flex-col gap-2">
          <div
            className="ds-main-block h-20 border border-(--color-brand-red)/40 rounded-md overflow-hidden"
            style={{ transformOrigin: "top" }}
          >
            <div className="h-full bg-(--color-brand-red)/10" />
          </div>
          <div className="flex gap-2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="ds-card-block flex-1 h-8 border border-(--color-brand-red)/25 rounded"
                style={{ transformOrigin: "left" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   GRAPHIC: e-commerce stats + chart
───────────────────────────────────────────────────────────── */
const EcommerceGraphic = () => (
  <div className="ds-graphic flex-1 w-full relative mt-8 flex flex-col gap-3">
    <div className="flex gap-3">
      {/* sales total */}
      <div className="w-1/2 bg-white/5 border border-white/10 h-16 rounded-xl overflow-hidden relative">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent to-green-500/20" />
        <div className="p-3">
          <p className="text-[0.6rem] text-white/50 uppercase tracking-wider">
            Total Sales
          </p>
          <p className="ds-counter font-shrikhand text-(--color-brand-yellow) text-xl">
            0€
          </p>
        </div>
      </div>

      {/* orders */}
      <div className="w-1/2 bg-white/5 border border-white/10 h-16 rounded-xl p-3">
        <p className="text-[0.6rem] text-white/50 uppercase tracking-wider mb-1">
          Orders
        </p>
        <div className="flex items-center gap-1">
          <div
            className="ds-progress-bar h-2 bg-gradient-to-r from-(--color-brand-yellow)/60 to-(--color-brand-yellow)/30 rounded-full"
            style={{ width: 0 }}
          />
          <span className="ds-orders-num text-[0.65rem] text-(--color-brand-yellow) font-mono">
            0
          </span>
        </div>
      </div>
    </div>

    {/* chart */}
    <div className="flex-1 bg-gradient-to-t from-green-500/10 to-transparent border border-white/5 rounded-xl rounded-b-none overflow-hidden relative group-hover:from-green-500/20 transition-colors duration-500">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 60"
        aria-hidden
      >
        <path
          className="ds-chart-fill"
          d="M0,60 L0,60 L100,60 Z"
          fill="rgba(0,255,100,0.08)"
        />
        <path
          className="ds-chart-line"
          d="M0,50"
          fill="none"
          stroke="rgba(0,255,100,0.5)"
          strokeWidth="1"
        />
        {CHART_DOTS.map(([x, y], i) => (
          <circle
            key={i}
            className="ds-dot"
            cx={x}
            cy={y}
            r="1.5"
            fill="#00FF64"
            opacity="0"
          />
        ))}
      </svg>
      <div className="absolute top-3 left-3 flex items-center gap-1 text-[0.65rem] font-bold tracking-wider text-[#00FF64]">
        <span className="ds-badge bg-[#00FF64] text-black px-1.5 py-0.5 rounded-sm">
          ↗ +12%
        </span>
        <span className="text-white/40">vs last month</span>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   GRAPHIC: neural-net visualisation (AI card)
───────────────────────────────────────────────────────────── */
const SPOKE_COORDS = [
  [20, 20],
  [80, 20],
  [20, 80],
  [80, 80],
  [10, 50],
  [90, 50],
  [50, 10],
  [50, 90],
];

const AIGraphic = () => (
  <div className="ds-graphic flex-1 w-full relative mt-8 flex justify-center items-center">
    <div
      className="w-full max-h-52 relative grid place-items-center"
      style={{ height: "100%" }}
    >
      <svg className="absolute w-full h-full" viewBox="0 0 100 100" aria-hidden>
        <circle
          className="ds-ring-1"
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="purple"
          strokeWidth="0.3"
          opacity="0"
        />
        <circle
          className="ds-ring-2"
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="purple"
          strokeWidth="0.3"
          opacity="0"
        />

        {SPOKE_COORDS.map(([x, y], i) => (
          <line
            key={i}
            className="ds-spoke"
            x1={x}
            y1={y}
            x2={50}
            y2={50}
            stroke="purple"
            strokeWidth="0.5"
            opacity="0"
          />
        ))}

        {SPOKE_COORDS.map(([x, y], i) => (
          <circle
            key={i}
            className="ds-node-dot"
            cx={x}
            cy={y}
            r={i < 4 ? 2.5 : 1.8}
            fill="#8b5cf6"
            opacity="0"
          />
        ))}

        <circle
          className="ds-center-node"
          cx="50"
          cy="50"
          r="5"
          fill="#a855f7"
          opacity="0"
        />
        <circle
          className="ds-center-ring"
          cx="50"
          cy="50"
          r="10"
          fill="none"
          stroke="#a855f7"
          strokeWidth="0.5"
          opacity="0"
        />
      </svg>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   ICONS
───────────────────────────────────────────────────────────── */
const IconLayout = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);
const IconCart = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const IconAI = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const IconMonitor = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const IconBars = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20v-6M6 20V10M18 20V4" />
  </svg>
);
const IconCheck = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12l5 5L20 7" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   CARD WRAPPER — shared chrome
───────────────────────────────────────────────────────────── */
const Card = ({ className = "", children }) => (
  <div
    className={`ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer ${className}`}
  >
    {children}
  </div>
);

/* ─────────────────────────────────────────────────────────────
   ANIMATION HELPERS  (all use container-scoped refs, never
   document.querySelector — fixes the original selector leak)
───────────────────────────────────────────────────────────── */

/** Heading: SplitText word reveal + subtitle fade */
function animateHeading(scope) {
  const title = scope.querySelector(".ds-title");
  if (!title) return;

  const split = new SplitText(title, { type: "lines,words" });
  gsap.from(split.words, {
    y: 60,
    opacity: 0,
    rotateX: -20,
    transformOrigin: "top",
    duration: 1.1,
    stagger: 0.04,
    ease: "power4.out",
    scrollTrigger: { trigger: title, start: "top 82%", once: true },
  });

  const subtitlePs = scope.querySelectorAll(".ds-subtitle > p");
  if (subtitlePs.length) {
    gsap.from(subtitlePs, {
      y: 24,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3,
      scrollTrigger: { trigger: title, start: "top 82%", once: true },
    });
  }
}

/** Cards: clip-path curtain reveal */
function animateCards(scope) {
  scope.querySelectorAll(".ds-cards-grid").forEach((grid) => {
    const cards = grid.querySelectorAll(".ds-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 90, opacity: 0, clipPath: "inset(20px 0px 0px 0px round 24px)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0px 0px 0px 0px round 24px)",
          duration: 1.0,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: grid, start: "top 78%", once: true },
        },
      );

      // parallax scroll on graphic inside each card
      const graphic = card.querySelector(".ds-graphic");
      if (graphic) {
        gsap.to(graphic, {
          y: -28,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    });
  });
}

/** Design card: scan line + sequential content build */
function animateDesignCard(scope) {
  const scanLine = scope.querySelector(".ds-scanline");
  if (!scanLine) return;

  const trigger = {
    trigger: scanLine.closest(".ds-card"),
    start: "top 78%",
    once: true,
  };

  gsap.to(scanLine, {
    y: "100%",
    duration: 2.4,
    ease: "none",
    repeat: -1,
    repeatDelay: 1.2,
    scrollTrigger: { trigger: scanLine.closest(".ds-card"), start: "top 90%" },
  });

  gsap.fromTo(
    scope.querySelector(".ds-url-bar"),
    { scaleX: 0 },
    { scaleX: 1, duration: 1.4, ease: "steps(12)", scrollTrigger: trigger },
  );

  scope.querySelectorAll(".ds-bar").forEach((bar, i) => {
    gsap.from(bar, {
      scaleX: 0,
      duration: 0.6,
      delay: 0.5 + i * 0.12,
      ease: "power2.out",
      scrollTrigger: trigger,
    });
  });

  gsap.from(scope.querySelector(".ds-main-block"), {
    scaleY: 0,
    duration: 0.7,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: trigger,
  });

  scope.querySelectorAll(".ds-card-block").forEach((b, i) => {
    gsap.from(b, {
      scaleX: 0,
      duration: 0.5,
      delay: 0.9 + i * 0.1,
      ease: "power2.out",
      scrollTrigger: trigger,
    });
  });
}

/** E-commerce: chart draw + counters */
function animateEcommerceCard(scope) {
  const linePath = scope.querySelector(".ds-chart-line");
  const fillPath = scope.querySelector(".ds-chart-fill");
  const counter = scope.querySelector(".ds-counter");
  const ordersEl = scope.querySelector(".ds-orders-num");
  const bar = scope.querySelector(".ds-progress-bar");
  if (!linePath) return;

  const FINAL_D = "M0,50 Q20,42 40,32 T80,12 T100,8";
  const FINAL_FILL = "M0,60 L0,50 Q20,42 40,32 T80,12 T100,8 L100,60 Z";

  const card = linePath.closest(".ds-card");

  ScrollTrigger.create({
    trigger: card,
    start: "top 78%",
    once: true,
    onEnter() {
      gsap.to(linePath, {
        attr: { d: FINAL_D },
        duration: 1.4,
        ease: "power2.inOut",
        onUpdate() {
          if (fillPath && this.progress() > 0.5)
            fillPath.setAttribute("d", FINAL_FILL);
        },
      });
      gsap.to(scope.querySelector(".ds-badge"), {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1.2,
      });
      gsap.to(scope.querySelectorAll(".ds-dot"), {
        opacity: 1,
        stagger: 0.12,
        duration: 0.3,
        delay: 0.9,
      });
    },
  });

  if (!counter) return;

  ScrollTrigger.create({
    trigger: counter,
    start: "top 85%",
    once: true,
    onEnter() {
      gsap.to(
        { val: 0 },
        {
          val: 45_543,
          duration: 1.8,
          ease: "power2.out",
          onUpdate() {
            counter.textContent =
              Math.round(this.targets()[0].val).toLocaleString() + "€";
          },
        },
      );
      gsap.to(
        { val: 0 },
        {
          val: 142,
          duration: 1.4,
          ease: "power2.out",
          onUpdate() {
            if (ordersEl)
              ordersEl.textContent = Math.round(this.targets()[0].val);
          },
        },
      );
      if (bar)
        gsap.to(bar, { width: "70%", duration: 1.4, ease: "power2.out" });
    },
  });
}

/** AI card: neural net entrance + idle loops */
function animateAICard(scope) {
  const spokes = scope.querySelectorAll(".ds-spoke");
  const nodeDots = scope.querySelectorAll(".ds-node-dot");
  const centerNode = scope.querySelector(".ds-center-node");
  const centerRing = scope.querySelector(".ds-center-ring");
  const ring1 = scope.querySelector(".ds-ring-1");
  const ring2 = scope.querySelector(".ds-ring-2");
  if (!centerNode || !spokes.length) return;

  ScrollTrigger.create({
    trigger: centerNode,
    start: "top 85%",
    once: true,
    onEnter() {
      gsap.to(centerNode, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(2)",
      });
      gsap.to(centerRing, { opacity: 0.5, duration: 0.6, delay: 0.2 });
      gsap.fromTo(
        ring1,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 0.25,
          duration: 1.2,
          delay: 0.4,
          ease: "power2.out",
        },
      );
      gsap.fromTo(
        ring2,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 0.12,
          duration: 1.6,
          delay: 0.6,
          ease: "power2.out",
        },
      );
      gsap.to(spokes, {
        opacity: 0.65,
        duration: 0.4,
        stagger: 0.08,
        delay: 0.3,
        ease: "power1.out",
      });
      gsap.to(nodeDots, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.07,
        delay: 0.6,
        ease: "back.out(3)",
      });

      // idle loops
      gsap.to(centerNode, {
        opacity: 0.6,
        scale: 1.4,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4,
      });
      gsap.to(centerRing, {
        opacity: 0,
        scale: 2,
        duration: 1.8,
        repeat: -1,
        ease: "power1.out",
        delay: 1.8,
      });
      spokes.forEach((s, i) =>
        gsap.to(s, {
          opacity: 0.2,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.6 + i * 0.18,
        }),
      );
      nodeDots.forEach((d, i) =>
        gsap.to(d, {
          opacity: 0.3,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2 + i * 0.22,
        }),
      );
    },
  });
}

/** Row 2 — bar chart, progress fills, float card, big counter */
function animateRow2(scope) {
  // bar chart
  scope.querySelectorAll(".ds-bar-chart-bar").forEach((bar, i) => {
    gsap.from(bar, {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 0.8,
      delay: i * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bar.closest(".ds-card"),
        start: "top 80%",
        once: true,
      },
    });
  });

  // progress fills — already set to target width in HTML; animate from 0
  scope.querySelectorAll(".ds-progress-fill").forEach((fill) => {
    const target = fill.style.width;
    fill.style.width = "0%";
    gsap.to(fill, {
      width: target,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: { trigger: fill, start: "top 88%", once: true },
    });
  });

  // float card pop
  const floatCard = scope.querySelector(".ds-float-card");
  if (floatCard) {
    gsap.from(floatCard, {
      y: 20,
      opacity: 0,
      scale: 0.92,
      duration: 0.8,
      ease: "back.out(1.6)",
      scrollTrigger: { trigger: floatCard, start: "top 90%", once: true },
    });
  }

  // big stat counter
  const bigStat = scope.querySelector(".ds-big-stat");
  if (bigStat) {
    ScrollTrigger.create({
      trigger: bigStat,
      start: "top 88%",
      once: true,
      onEnter() {
        gsap.to(
          { val: 0 },
          {
            val: 35_130,
            duration: 2,
            ease: "power2.out",
            onUpdate() {
              bigStat.textContent = Math.round(
                this.targets()[0].val,
              ).toLocaleString();
            },
          },
        );
      },
    });
  }
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
const DigitalSolutions = () => {
  const container = useRef();

  useGSAP(
    () => {
      const scope = container.current;
      animateHeading(scope);
      animateCards(scope);
      animateDesignCard(scope);
      animateEcommerceCard(scope);
      animateAICard(scope);
      animateRow2(scope);
    },
    { scope: container },
  );

  return (
    <section
      id="services"
      ref={container}
      className="relative w-full py-24 md:py-32 bg-(--color-brand-bg) text-white overflow-hidden z-20 border-t border-white/5"
    >
      {/* subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-container w-full px-4 md:px-6 lg:px-12 mx-auto flex flex-col gap-16">
        {/* ── HEADING ── */}
        <div className="ds-heading flex flex-col gap-8 w-full">
          <h2 className="ds-title font-shrikhand font-bold italic text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tight text-(--color-brand-cream)">
            Digital Solutions <br />
            <span className="text-(--color-brand-red)">Without Compromise</span>
          </h2>
          <div className="ds-subtitle text-xl md:text-2xl text-white/50 font-light leading-relaxed">
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

        {/* ── ROW 1 ── */}
        <div className="ds-cards-grid w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card: Design */}
          <Card className="min-h-[450px] lg:min-h-[550px] pt-8 px-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-(--color-brand-red) mb-2">
                <IconLayout />
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Design that Converts
              </h3>
              <p className="text-sm md:text-base text-white/50 lg:w-4/5 leading-relaxed">
                Intuitive interfaces that transform visitors into loyal
                customers
              </p>
            </div>
            <DesignGraphic />
            <div className="absolute bottom-6 left-8 right-8 flex flex-wrap gap-2 z-20">
              {DESIGN_PILLS.map((p) => (
                <Pill
                  key={p}
                  label={p}
                  className="border-white/10 text-white/60 bg-[#1A1A1A]/80 group-hover:border-white/30"
                />
              ))}
            </div>
          </Card>

          {/* Card: E-commerce */}
          <Card className="min-h-[450px] lg:min-h-[550px] p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-(--color-brand-yellow) mb-2">
                <IconCart />
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Sell Online
              </h3>
              <p className="text-sm md:text-base text-white/50 lg:w-4/5 leading-relaxed">
                Complete shops, secure payments, order management
              </p>
            </div>
            <EcommerceGraphic />
          </Card>

          {/* Card: AI */}
          <Card className="min-h-[450px] lg:min-h-[550px] p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-purple-500 mb-2">
                <IconAI />
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                AI & Automation
              </h3>
              <p className="text-sm md:text-base text-white/50 lg:w-4/5 leading-relaxed">
                Artificial intelligence and automated workflows
              </p>
            </div>
            <AIGraphic />
            <div className="absolute bottom-6 left-8 right-8 flex flex-wrap gap-2 z-20">
              {AI_PILLS.map((p) => (
                <Pill
                  key={p}
                  label={p}
                  className="border-purple-500/30 text-purple-400 bg-purple-900/10 group-hover:border-purple-500/60 group-hover:bg-purple-900/20"
                />
              ))}
            </div>
          </Card>
        </div>

        {/* ── ROW 2 ── */}
        <div className="ds-cards-grid w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card: Websites */}
          <Card className="min-h-[450px] lg:col-span-1 p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-(--color-brand-red) mb-2">
                <IconMonitor />
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Websites
              </h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                Responsive, high-performance, mobile-first
              </p>
            </div>

            <div className="ds-graphic flex-1 w-full relative mt-8 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-xl h-full w-full p-2 flex flex-col group-hover:bg-white/[0.07] transition-colors duration-500">
                <div className="flex gap-1.5 mb-2 px-1">
                  {["bg-red-500/70", "bg-yellow-500/70", "bg-green-500/70"].map(
                    (c, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
                    ),
                  )}
                </div>
                <div className="flex-1 bg-white/5 rounded-lg border border-white/10 flex justify-center items-center relative overflow-hidden">
                  {/* shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="w-24 h-28 bg-(--color-brand-cream)/5 border border-(--color-brand-cream)/10 rounded-lg flex flex-col justify-start p-2">
                    <div className="w-10 h-1 bg-(--color-brand-cream)/20 rounded-full mb-4 mx-auto mt-2" />
                    <div className="w-full flex-1 bg-(--color-brand-cream)/10 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* code badge */}
            <div className="mt-4 flex items-center justify-between px-3 py-2 bg-black/40 border border-white/5 rounded-full z-20">
              <div className="flex gap-1">
                {[0, 75, 150].map((d) => (
                  <div
                    key={d}
                    className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-(--color-brand-red) transition-colors duration-300"
                    style={{ transitionDelay: `${d}ms` }}
                  />
                ))}
              </div>
              <span className="text-[0.65rem] text-white/30 font-mono tracking-widest">
                &lt;div className='respons...'&gt;
              </span>
            </div>
          </Card>

          {/* Card: Custom Software */}
          <Card className="min-h-[450px] lg:col-span-2 p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-green-500 mb-2">
                <IconBars />
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Custom Software
              </h3>
              <p className="text-sm md:text-base text-white/50 lg:w-3/4 leading-relaxed">
                CRM, analytics dashboards, end-to-end business management
              </p>
            </div>

            <div className="ds-graphic flex-1 w-full relative mt-8 flex flex-col justify-between gap-6">
              {/* stat + bar chart */}
              <div className="flex gap-4 h-32 lg:h-40">
                <div className="w-1/3 bg-white/5 border border-white/10 rounded-2xl flex flex-col p-4">
                  <p className="text-[0.6rem] text-white/40 uppercase font-bold tracking-widest mb-1">
                    Active Clients
                  </p>
                  <p className="text-3xl lg:text-4xl text-green-500 font-bold mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">
                    +234
                  </p>
                  <div className="mt-auto space-y-2">
                    {[
                      ["Premium", "87"],
                      ["Basic", "147"],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="flex justify-between items-center text-[0.65rem]"
                      >
                        <span className="text-white/40">{k}</span>
                        <span className="text-white/80">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-2/3 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-end justify-between gap-2 lg:gap-4 pb-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors duration-500" />
                  {BAR_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className="ds-bar-chart-bar w-1/6 bg-green-900/30 border-t border-l border-r border-green-500/30 rounded-t-lg group-hover:bg-green-800/50 transition-colors duration-300"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* progress rows + floating card */}
              <div className="flex flex-col gap-3 flex-1 lg:pr-48 relative">
                {PROGRESS_ROWS.map(({ label, color, target, count }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-20 text-[0.65rem] text-white/50 uppercase tracking-widest font-bold">
                      {label}
                    </div>
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`ds-progress-fill h-full ${color} rounded-full`}
                        style={{ width: target }}
                      />
                    </div>
                    <div className="w-8 text-right text-[0.7rem] font-mono opacity-80">
                      {count}
                    </div>
                  </div>
                ))}

                {/* floating stat */}
                <div className="ds-float-card absolute right-0 top-0 lg:bottom-0 lg:top-auto h-24 w-40 bg-[#1A1A1A] border border-white/10 shadow-2xl rounded-2xl p-4 flex flex-col justify-center group-hover:-translate-y-2 transition-transform duration-500">
                  <p className="text-[0.6rem] text-white/40 uppercase font-bold tracking-widest mb-1">
                    Operations/month
                  </p>
                  <p className="ds-big-stat text-3xl text-[#00FF64] font-shrikhand italic tracking-tight">
                    0
                  </p>
                  <p className="text-[0.6rem] text-[#00FF64]/70 mt-1 flex items-center gap-1">
                    <IconCheck /> Automated
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-8 flex gap-2 z-20">
              {SOFTWARE_PILLS.map((p) => (
                <Pill
                  key={p}
                  label={p}
                  className="border-green-500/20 text-green-500/70 hover:bg-green-500/10 hover:text-green-500"
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;
