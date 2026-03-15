import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Confetti = () => {
  const container = useRef();

  const colors = [
    "var(--color-brand-red)",
    "var(--color-brand-yellow)",
    "var(--color-brand-teal)",
    "#7e3f28",
    "#597985",
  ];

  const flakes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    type: ["triangle", "shard", "squiggle", "circle"][
      Math.floor(Math.random() * 4)
    ],
    color: colors[Math.floor(Math.random() * colors.length)],
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 90 + 5}%`,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 2,
    duration: Math.random() * 4 + 4,
  }));

  useGSAP(
    () => {
      gsap.utils.toArray(".confetti-flake").forEach((flake) => {
        gsap.to(flake, {
          y: "random(-40, 40)",
          x: "random(-20, 20)",
          rotation: "random(-180, 180)",
          duration: "random(4, 8)",
          ease: "sine.inOut",
          yoyo: true,
          repeat: 3,

          delay: "random(0, 2)",
        });

        gsap.to(flake, {
          yPercent: "random(-200, 200)",
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top left",
            end: "bottom left",
            scrub: true,
          },
        });
      });
    },
    { scope: container },
  );

  const renderShape = (type, color) => {
    switch (type) {
      case "triangle":
        return <path d="M50 0 L100 100 L0 100 Z" fill={color} />;
      case "shard":
        return <path d="M0 0 L100 20 L80 100 L20 80 Z" fill={color} />;
      case "squiggle":
        return (
          <path
            d="M0 50 Q 25 0, 50 50 T 100 50"
            stroke={color}
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
        );
      case "circle":
        return <circle cx="50" cy="50" r="50" fill={color} />;
      default:
        return <circle cx="50" cy="50" r="50" fill={color} />;
    }
  };

  return (
    <div
      ref={container}
      className="absolute inset-0 pointer-events-none overflow-hidden z-10 w-full min-h-screen"
    >
      {flakes.map((flake) => (
        <svg
          key={flake.id}
          className="confetti-flake absolute mix-blend-screen"
          style={{
            top: flake.top,
            left: flake.left,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: 0.7,
          }}
          viewBox="0 0 100 100"
        >
          {renderShape(flake.type, flake.color)}
        </svg>
      ))}
    </div>
  );
};

export default Confetti;
