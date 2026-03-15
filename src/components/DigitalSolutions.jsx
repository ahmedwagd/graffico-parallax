import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/* ─────────────────────────────────────────
   Card data — keeps JSX clean
───────────────────────────────────────── */
const ROW_ONE = [
  {
    id: "design",
    accent: "--color-brand-red",
    accentHex: "#E5321B",
    title: "Design that Converts",
    body: "Intuitive interfaces that transform visitors into loyal customers",
    pills: ["Prototyping", "User Research", "Design System"],
    pillStyle: "border-white/10 text-white/60 bg-[#1A1A1A]/80",
    pillHover: "group-hover:border-white/30",
    icon: (
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
    ),
    graphic: "design",
  },
  {
    id: "ecommerce",
    accent: "--color-brand-yellow",
    accentHex: "#F5C842",
    title: "Sell Online",
    body: "Complete shops, secure payments, order management",
    pills: [],
    pillStyle: "",
    pillHover: "",
    icon: (
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
    ),
    graphic: "ecommerce",
  },
  {
    id: "ai",
    accent: "purple-500",
    accentHex: "#8b5cf6",
    title: "AI & Automation",
    body: "Artificial intelligence and automated workflows",
    pills: ["Machine Learning", "Automations"],
    pillStyle: "border-purple-500/30 text-purple-400 bg-purple-900/10",
    pillHover: "group-hover:border-purple-500/60 group-hover:bg-purple-900/20",
    icon: (
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
    ),
    graphic: "ai",
  },
];

/* ─────────────────────────────────────────
   Graphic: Design card mock-browser
───────────────────────────────────────── */
const DesignGraphic = () => (
  <div className="ds-graphic flex-1 w-full relative mt-8 border-t border-l border-r border-(--color-brand-red)/30 rounded-t-2xl bg-(--color-brand-red)/5 flex justify-center pt-6 group-hover:bg-(--color-brand-red)/10 transition-colors duration-500 overflow-hidden">
    {/* Animated scan line */}
    <div className="ds-scanline absolute top-0 left-0 right-0 h-px bg-(--color-brand-red)/40 pointer-events-none" />
    <div className="w-5/6 h-full border-t border-l border-r border-(--color-brand-red)/40 rounded-t-xl flex flex-col">
      {/* Browser bar */}
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
          <div className="w-12 h-1 bg-(--color-brand-red)/30 rounded-full ds-url-bar" />
        </div>
      </div>
      {/* Content area */}
      <div className="flex-1 flex gap-3 p-3">
        {/* Sidebar */}
        <div className="w-1/3 flex flex-col gap-2">
          <div
            className="h-4 border border-(--color-brand-red)/40 rounded ds-bar"
            style={{ width: "80%" }}
          />
          <div
            className="h-4 border border-(--color-brand-red)/40 rounded ds-bar"
            style={{ width: "65%" }}
          />
          <div
            className="h-4 border border-(--color-brand-red)/25 rounded ds-bar"
            style={{ width: "75%" }}
          />
          <div
            className="h-4 border border-(--color-brand-red)/25 rounded ds-bar"
            style={{ width: "55%" }}
          />
        </div>
        {/* Main */}
        <div className="w-2/3 flex flex-col gap-2">
          <div className="h-20 border border-(--color-brand-red)/40 rounded-md ds-main-block relative overflow-hidden">
            <div className="absolute inset-0 bg-(--color-brand-red)/10 ds-hero-fill" />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-8 border border-(--color-brand-red)/25 rounded ds-card-block" />
            <div className="flex-1 h-8 border border-(--color-brand-red)/25 rounded ds-card-block" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Graphic: E-commerce card
───────────────────────────────────────── */
const EcommerceGraphic = () => (
  <div className="ds-graphic flex-1 w-full relative mt-8 flex flex-col gap-3">
    {/* Stats row */}
    <div className="flex gap-3">
      <div className="w-1/2 bg-white/5 border border-white/10 h-16 rounded-xl overflow-hidden relative">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent to-green-500/20" />
        <div className="p-3">
          <p className="text-[0.6rem] text-white/50 uppercase tracking-wider">
            Total Sales
          </p>
          <p
            className="font-shrikhand text-(--color-brand-yellow) text-xl ds-counter"
            data-target="45543"
          >
            0€
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-white/5 border border-white/10 h-16 rounded-xl p-3">
        <p className="text-[0.6rem] text-white/50 uppercase tracking-wider mb-1">
          Orders
        </p>
        <div className="flex items-center gap-1">
          <div
            className="h-2 bg-gradient-to-r from-(--color-brand-yellow)/60 to-(--color-brand-yellow)/30 rounded-full ds-progress-bar"
            style={{ width: 0 }}
          />
          <span className="text-[0.65rem] text-(--color-brand-yellow) font-mono ds-orders-num">
            0
          </span>
        </div>
      </div>
    </div>
    {/* Chart area */}
    <div className="flex-1 bg-gradient-to-t from-green-500/10 to-transparent border border-white/5 rounded-xl border-b-0 rounded-b-none relative overflow-hidden group-hover:from-green-500/20 transition-colors duration-500">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 60"
      >
        {/* Fill */}
        <path
          className="ds-chart-path-fill"
          d="M0,60 L0,60 L100,60 Z"
          fill="rgba(0,255,100,0.08)"
        />
        {/* Line */}
        <path
          className="ds-chart-path-line"
          d="M0,50"
          fill="none"
          stroke="rgba(0,255,100,0.5)"
          strokeWidth="1"
        />
        {/* Dots */}
        {[
          [20, 42],
          [40, 32],
          [60, 22],
          [80, 12],
          [100, 8],
        ].map(([x, y], i) => (
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
      <div className="absolute top-3 left-3 text-[0.65rem] text-[#00FF64] flex items-center gap-1 font-bold tracking-wider">
        <span className="bg-[#00FF64] text-black px-1.5 py-0.5 rounded-sm ds-badge">
          ↗ +12%
        </span>
        <span className="text-white/40">vs last month</span>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Graphic: AI card neural net
───────────────────────────────────────── */
const AIGraphic = () => (
  <div className="ds-graphic flex-1 w-full relative mt-8 flex justify-center items-center">
    <div className="w-full h-full max-h-52 relative grid place-items-center">
      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
        {/* Pulse rings */}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="purple"
          strokeWidth="0.3"
          opacity="0.2"
          className="ds-ring-1"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="purple"
          strokeWidth="0.3"
          opacity="0.1"
          className="ds-ring-2"
        />

        {/* Spoke lines */}
        {[
          [20, 20],
          [80, 20],
          [20, 80],
          [80, 80],
          [10, 50],
          [90, 50],
          [50, 10],
          [50, 90],
        ].map(([x, y], i) => (
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

        {/* Outer nodes */}
        {[
          [20, 20],
          [80, 20],
          [20, 80],
          [80, 80],
          [10, 50],
          [90, 50],
          [50, 10],
          [50, 90],
        ].map(([x, y], i) => (
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

        {/* Center */}
        <circle
          cx="50"
          cy="50"
          r="5"
          fill="#a855f7"
          opacity="0"
          className="ds-center-node"
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="none"
          stroke="#a855f7"
          strokeWidth="0.5"
          opacity="0"
          className="ds-center-ring"
        />
      </svg>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Card renderer
───────────────────────────────────────── */
const CardGraphic = ({ id }) => {
  if (id === "design") return <DesignGraphic />;
  if (id === "ecommerce") return <EcommerceGraphic />;
  if (id === "ai") return <AIGraphic />;
  return null;
};

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
const DigitalSolutions = () => {
  const container = useRef();

  useGSAP(
    () => {
      /* ── 1. Section entrance — staggered letter reveal ── */
      const headingSplit = new SplitText(".ds-title", { type: "lines,words" });
      gsap.from(headingSplit.words, {
        y: 60,
        opacity: 0,
        rotateX: -20,
        transformOrigin: "top",
        duration: 1.1,
        stagger: 0.04,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".ds-heading",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".ds-subtitle > p", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".ds-heading",
          start: "top 82%",
          once: true,
        },
      });

      /* ── 2. Cards — staggered rise + clip reveal ── */
      const allCards = gsap.utils.toArray(".ds-card");
      allCards.forEach((card, i) => {
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
            scrollTrigger: {
              trigger: card.closest(".ds-cards-grid") || card,
              start: "top 78%",
              once: true,
            },
          },
        );
      });

      /* ── 3. Parallax graphics on scroll ── */
      allCards.forEach((card) => {
        const graphic = card.querySelector(".ds-graphic");
        if (!graphic) return;
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
      });

      /* ── 4. Scan line animation on Design card ── */
      const scanLine = document.querySelector(".ds-scanline");
      if (scanLine) {
        gsap.to(scanLine, {
          y: "100%",
          duration: 2.4,
          ease: "none",
          repeat: -1,
          repeatDelay: 1.2,
          scrollTrigger: {
            trigger: ".ds-card",
            start: "top 90%",
          },
        });

        /* URL bar typing effect */
        gsap.fromTo(
          ".ds-url-bar",
          { scaleX: 0, transformOrigin: "left" },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "steps(12)",
            scrollTrigger: {
              trigger: ".ds-card",
              start: "top 78%",
              once: true,
            },
          },
        );

        /* Bar widths animate in */
        gsap.utils.toArray(".ds-bar").forEach((bar, i) => {
          gsap.from(bar, {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.6,
            delay: 0.5 + i * 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".ds-card",
              start: "top 78%",
              once: true,
            },
          });
        });

        gsap.from(".ds-main-block", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 0.7,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: { trigger: ".ds-card", start: "top 78%", once: true },
        });

        gsap.utils.toArray(".ds-card-block").forEach((b, i) => {
          gsap.from(b, {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.5,
            delay: 0.9 + i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".ds-card",
              start: "top 78%",
              once: true,
            },
          });
        });
      }

      /* ── 5. E-commerce chart draw ── */
      const linePath = document.querySelector(".ds-chart-path-line");
      const fillPath = document.querySelector(".ds-chart-path-fill");
      if (linePath) {
        const finalD = "M0,50 Q20,42 40,32 T80,12 T100,8";
        const finalFill = "M0,60 L0,50 Q20,42 40,32 T80,12 T100,8 L100,60 Z";
        ScrollTrigger.create({
          trigger: linePath.closest(".ds-card") || ".ds-cards-grid",
          start: "top 78%",
          once: true,
          onEnter: () => {
            gsap.to(linePath, {
              attr: { d: finalD },
              duration: 1.4,
              ease: "power2.inOut",
              onUpdate() {
                /* interpolate fill path in sync */
                const progress = this.progress();
                if (fillPath) {
                  fillPath.setAttribute(
                    "d",
                    progress > 0.5
                      ? finalFill
                      : `M0,60 L0,50 Q${20 * progress * 2},${50 - 8 * progress * 2} ${40 * progress * 2},${50 - 18 * progress * 2} L100,60 Z`,
                  );
                }
              },
            });
            gsap.to(".ds-badge", {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 1.2,
            });
            gsap.to(".ds-dot", {
              opacity: 1,
              stagger: 0.12,
              duration: 0.3,
              delay: 0.9,
            });
          },
        });

        /* Counter animation */
        const counterEl = document.querySelector(".ds-counter");
        const ordersEl = document.querySelector(".ds-orders-num");
        const progressBar = document.querySelector(".ds-progress-bar");
        if (counterEl) {
          ScrollTrigger.create({
            trigger: counterEl,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(
                { val: 0 },
                {
                  val: 45543,
                  duration: 1.8,
                  ease: "power2.out",
                  onUpdate() {
                    counterEl.textContent =
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
              if (progressBar) {
                gsap.to(progressBar, {
                  width: "70%",
                  duration: 1.4,
                  ease: "power2.out",
                });
              }
            },
          });
        }
      }

      /* ── 6. AI neural net animation ── */
      const spokes = gsap.utils.toArray(".ds-spoke");
      const nodeDots = gsap.utils.toArray(".ds-node-dot");
      const centerNode = document.querySelector(".ds-center-node");
      const centerRing = document.querySelector(".ds-center-ring");
      const ring1 = document.querySelector(".ds-ring-1");
      const ring2 = document.querySelector(".ds-ring-2");

      if (spokes.length) {
        ScrollTrigger.create({
          trigger: ".ds-center-node",
          start: "top 85%",
          once: true,
          onEnter: () => {
            /* Center node pulses in */
            gsap.to(centerNode, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "back.out(2)",
            });
            gsap.to(centerRing, { opacity: 0.5, duration: 0.6, delay: 0.2 });

            /* Pulse rings scale out */
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

            /* Spokes draw out staggered */
            gsap.to(spokes, {
              opacity: 0.65,
              duration: 0.4,
              stagger: 0.08,
              delay: 0.3,
              ease: "power1.out",
            });

            /* Node dots pop in */
            gsap.to(nodeDots, {
              opacity: 1,
              duration: 0.3,
              stagger: 0.07,
              delay: 0.6,
              ease: "back.out(3)",
            });

            /* Ongoing: pulse center + ripple rings */
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

            /* Spokes pulse opacity in sequence */
            spokes.forEach((spoke, i) => {
              gsap.to(spoke, {
                opacity: 0.2,
                duration: 0.6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1.6 + i * 0.18,
              });
            });

            /* Node dots twinkle */
            nodeDots.forEach((dot, i) => {
              gsap.to(dot, {
                opacity: 0.3,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 2 + i * 0.22,
              });
            });
          },
        });
      }

      /* ── 7. Row 2: websites card text code reveal ── */
      const codeEl = document.querySelector(".ds-code-text");
      if (codeEl) {
        gsap.from(codeEl, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: codeEl, start: "top 88%", once: true },
        });
      }

      /* ── 8. Row 2: Custom software — progress bars ── */
      gsap.utils.toArray(".ds-progress-fill").forEach((fill) => {
        const target = fill.dataset.target || "70%";
        gsap.from(fill, {
          width: "0%",
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: fill, start: "top 88%", once: true },
        });
      });

      /* Big stat number */
      const bigStat = document.querySelector(".ds-big-stat");
      if (bigStat) {
        ScrollTrigger.create({
          trigger: bigStat,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(
              { val: 0 },
              {
                val: 35130,
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

      /* Bar chart bars rise */
      gsap.utils.toArray(".ds-bar-chart-bar").forEach((bar, i) => {
        const h = bar.dataset.h || "40%";
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

      /* Floating card pop-in */
      gsap.from(".ds-float-card", {
        y: 20,
        opacity: 0,
        scale: 0.92,
        duration: 0.8,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".ds-float-card",
          start: "top 90%",
          once: true,
        },
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
      {/* Subtle grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-container w-full px-4 md:px-6 lg:px-12 mx-auto flex flex-col gap-16">
        {/* ── Heading ── */}
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

        {/* ── Row 1 ── */}
        <div className="ds-cards-grid w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 — Design */}
          <div className="ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[450px] lg:min-h-[550px] transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer pt-8 px-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-(--color-brand-red) mb-2">
                {ROW_ONE[0].icon}
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Design that Converts
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 w-full lg:w-4/5 leading-relaxed">
                Intuitive interfaces that transform visitors into loyal
                customers
              </p>
            </div>
            <DesignGraphic />
            <div className="absolute bottom-6 left-8 right-8 flex flex-wrap gap-2 z-20">
              {["Prototyping", "User Research", "Design System"].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-[0.65rem] uppercase tracking-wider font-bold rounded-full border border-white/10 text-white/60 bg-[#1A1A1A]/80 backdrop-blur-sm group-hover:border-white/30 transition-colors duration-300"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 — Ecommerce */}
          <div className="ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[450px] lg:min-h-[550px] transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-(--color-brand-yellow) mb-2">
                {ROW_ONE[1].icon}
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Sell Online
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 w-full lg:w-4/5 leading-relaxed">
                Complete shops, secure payments, order management
              </p>
            </div>
            <EcommerceGraphic />
          </div>

          {/* Card 3 — AI */}
          <div className="ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[450px] lg:min-h-[550px] transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-purple-500 mb-2">{ROW_ONE[2].icon}</div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                AI & Automation
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 w-full lg:w-4/5 leading-relaxed">
                Artificial intelligence and automated workflows
              </p>
            </div>
            <AIGraphic />
            <div className="absolute bottom-6 left-8 right-8 flex flex-wrap gap-2 z-20">
              {["Machine Learning", "Automations"].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-[0.65rem] uppercase tracking-wider font-bold rounded-full border border-purple-500/30 text-purple-400 bg-purple-900/10 backdrop-blur-sm group-hover:border-purple-500/60 group-hover:bg-purple-900/20 transition-colors duration-300"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 2 ── */}
        <div className="ds-cards-grid w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 4 — Websites */}
          <div className="ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[450px] lg:col-span-1 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-(--color-brand-red) mb-2">
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
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Websites
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 w-full leading-relaxed">
                Responsive, high-performance, mobile-first
              </p>
            </div>

            <div className="ds-graphic flex-1 w-full relative mt-8 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-xl h-full w-full p-2 flex flex-col group-hover:bg-white/[0.07] transition-colors duration-500">
                <div className="flex gap-1.5 mb-2 px-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 bg-white/5 rounded-lg border border-white/10 flex justify-center items-center relative overflow-hidden">
                  {/* Animated shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="w-24 h-28 bg-(--color-brand-cream)/5 border border-(--color-brand-cream)/10 rounded-lg shadow-lg flex flex-col justify-start p-2">
                    <div className="w-10 h-1 bg-(--color-brand-cream)/20 rounded-full mb-4 mx-auto mt-2" />
                    <div className="w-full flex-1 bg-(--color-brand-cream)/10 rounded shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between px-3 py-2 bg-black/40 border border-white/5 rounded-full z-20">
              <div className="flex gap-1">
                {[
                  "group-hover:bg-(--color-brand-red)",
                  "group-hover:bg-(--color-brand-red) delay-75",
                  "group-hover:bg-(--color-brand-red) delay-150",
                ].map((cls, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full bg-white/30 transition-colors duration-300 ${cls}`}
                  />
                ))}
              </div>
              <span className="ds-code-text text-[0.65rem] text-white/30 font-mono tracking-widest">
                &lt;div className='respons...'&gt;
              </span>
            </div>
          </div>

          {/* Card 5 — Custom Software */}
          <div className="ds-card group relative bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-h-[450px] lg:col-span-2 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 cursor-pointer p-8">
            <div className="flex flex-col gap-2 z-10 relative">
              <div className="text-green-500 mb-2">
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
              </div>
              <h3 className="font-shrikhand italic text-2xl md:text-3xl text-(--color-brand-cream)">
                Custom Software
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 w-full lg:w-3/4 leading-relaxed">
                CRM, analytics dashboards, end-to-end business management
              </p>
            </div>

            <div className="ds-graphic flex-1 w-full relative mt-8 flex flex-col justify-between gap-6">
              {/* Stat + bar chart */}
              <div className="flex gap-4 h-32 lg:h-40">
                <div className="w-1/3 bg-white/5 border border-white/10 rounded-2xl flex flex-col p-4">
                  <p className="text-[0.6rem] text-white/40 uppercase font-bold tracking-widest mb-1">
                    Active Clients
                  </p>
                  <p className="text-3xl lg:text-4xl text-green-500 font-bold mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">
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

                {/* Bar chart */}
                <div className="w-2/3 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-end justify-between gap-2 lg:gap-4 pb-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors duration-500" />
                  {[40, 60, 30, 80, 40, 100].map((h, i) => (
                    <div
                      key={i}
                      className="ds-bar-chart-bar w-1/6 bg-green-900/30 border-t border-l border-r border-green-500/30 rounded-t-lg group-hover:bg-green-800/50 transition-colors duration-300"
                      style={{ height: `${h}%` }}
                      data-h={`${h}%`}
                    />
                  ))}
                </div>
              </div>

              {/* Progress rows + floating card */}
              <div className="flex flex-col gap-3 flex-1 lg:pr-48 relative">
                {[
                  {
                    label: "Orders",
                    color: "bg-green-500/60",
                    target: "85%",
                    count: 142,
                  },
                  {
                    label: "Invoices",
                    color: "bg-yellow-500/60",
                    target: "60%",
                    count: 89,
                  },
                ].map(({ label, color, target, count }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-20 text-[0.65rem] text-white/50 uppercase tracking-widest font-bold">
                      {label}
                    </div>
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`ds-progress-fill h-full ${color} rounded-full`}
                        style={{ width: target }}
                        data-target={target}
                      />
                    </div>
                    <div className="w-8 text-right text-[0.7rem] font-mono opacity-80">
                      {count}
                    </div>
                  </div>
                ))}

                {/* Floating stat card */}
                <div className="ds-float-card absolute right-0 top-0 lg:bottom-0 lg:top-auto h-24 w-40 bg-[#1A1A1A] border border-white/10 shadow-2xl rounded-2xl p-4 flex flex-col justify-center group-hover:-translate-y-2 transition-transform duration-500">
                  <p className="text-[0.6rem] text-white/40 uppercase font-bold tracking-widest mb-1">
                    Operations/month
                  </p>
                  <p className="text-3xl text-[#00FF64] font-shrikhand italic tracking-tight ds-big-stat">
                    0
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
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    Automated
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-8 flex gap-2 z-20">
              {["Dashboard", "Analytics", "Reports"].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-[0.6rem] uppercase tracking-wider font-bold rounded-full border border-green-500/20 text-green-500/70 hover:bg-green-500/10 hover:text-green-500 transition-colors duration-300 cursor-pointer"
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
