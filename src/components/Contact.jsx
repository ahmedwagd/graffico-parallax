import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".contact-elem", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      id="contact"
      ref={container}
      className="relative w-full bg-[#101011] text-white py-24 md:py-32 flex flex-col items-center justify-center z-20"
    >
      <div className="max-w-3xl w-full px-4 mx-auto flex flex-col items-center">
        <h2 className="contact-elem font-shrikhand text-4xl md:text-5xl lg:text-[3.5rem] text-center leading-[1.2] mb-8">
          Ready to reclaim <span className="text-[#dbbc53]">time</span>
          <br />
          and scale your <span className="text-[#dbbc53]">business?</span>
        </h2>

        <p className="contact-elem text-center text-gray-400 text-sm md:text-[15px] leading-relaxed mb-12 max-w-2xl font-sans tracking-wide">
          Discover how to <em className="text-white italic">modernize</em> your{" "}
          <strong className="text-white font-bold">digital presence</strong> and{" "}
          <strong className="text-white font-bold">automate</strong>
          <br className="hidden md:block" />
          key{" "}
          <strong className="text-white font-bold inline-block border-b border-gray-400 pb-[1px] leading-tight">
            processes
          </strong>{" "}
          to free up <em className="text-[#dbbc53] italic font-serif">time</em>{" "}
          and <strong className="text-white font-bold">resources</strong>.
        </p>

        <form className="contact-elem w-full flex flex-col gap-4 mb-16">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-5 py-4 text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#dbbc53] transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-5 py-4 text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#dbbc53] transition-colors"
            />
          </div>
          <textarea
            rows="5"
            defaultValue="Hi, I'd like to request a free consultation!"
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-5 py-4 text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#dbbc53] transition-colors resize-none text-gray-300"
          ></textarea>

          <button
            type="submit"
            className="group relative w-full border border-[#dbbc53] rounded-lg py-5 mt-2 bg-transparent hover:bg-[#dbbc53]/5 transition-colors flex items-center justify-center cursor-pointer"
          >
            <span className="text-[#dbbc53] font-bold text-xs md:text-sm tracking-widest uppercase border-b border-[#dbbc53] pb-0.5 group-hover:border-transparent transition-colors">
              Request a free consultation
            </span>
          </button>
        </form>

        <div className="contact-elem flex flex-col items-center gap-6">
          <div className="flex gap-5">
            <a
              href="#"
              className="text-[#E8DAD0] hover:text-[#dbbc53] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[#E8DAD0] hover:text-[#dbbc53] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <div className="flex gap-3 text-gray-500 text-[10px] uppercase font-bold tracking-widest mt-1">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
