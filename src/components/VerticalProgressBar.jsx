import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

const VerticalProgressBar = () => {
  useGSAP(() => {
    gsap.to(".progress-fill", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });
  });

  return (
    <div
      aria-hidden
      className="fixed right-0 top-1/2 -translate-y-1/2 h-[60vh] w-1 hidden md:flex flex-col items-center z-50 mr-4 lg:mr-8 bg-[rgba(233,77,47,0.2)] rounded-full overflow-hidden"
    >
      <div className="progress-fill w-full bg-(--color-brand-red) h-0 rounded-full" />
    </div>
  );
};

export default VerticalProgressBar;
