import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", id: "#home" },
    { name: "Services", id: "#services" },
    { name: "Projects", id: "#projects" },
    { name: "Team", id: "#team" },
    { name: "Contact", id: "#contact" },
  ];

  const handleNavClick = (link) => {
    setActive(link.name);

    if (window.lenis) {
      window.lenis.scrollTo(link.id);
    } else {
      document.querySelector(link.id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-start px-6 pt-6 w-full max-container pointer-events-none">
      <div className="pointer-events-auto flex items-center p-1 bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 rounded-full">
        <button className="flex items-center gap-2 px-4 py-2 bg-(--color-brand-cream) text-[#1A1A1A] rounded-full text-[0.65rem] font-bold tracking-widest leading-none uppercase">
          <img
            src="https://flagcdn.com/w20/us.png"
            alt="EN"
            className="w-[14px] h-[10px] rounded-[2px] object-cover"
          />
          EN
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-white/50 hover:text-white transition-colors rounded-full text-[0.65rem] font-bold tracking-widest leading-none uppercase group">
          <img
            src="https://flagcdn.com/w20/it.png"
            alt="IT"
            className="w-[14px] h-[10px] rounded-[2px] object-cover opacity-50 group-hover:opacity-100 transition-opacity"
          />
          IT
        </button>
      </div>

      <nav className="pointer-events-auto flex items-center p-1.5 bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 rounded-full absolute left-1/2 -translate-x-1/2">
        <div className="flex items-center">
          <div className="flex items-center pr-6 pl-5 border-r border-white/10 h-6">
            <img
              src="/logo-long-small.svg"
              alt="logo"
              className="h-full w-auto object-contain"
            />
          </div>

          <ul className="hidden md:flex items-center gap-1 pl-4 pr-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link)}
                  className={`px-4 py-2.5 rounded-full text-[0.8rem] font-sans font-bold transition-all duration-300 ${
                    active === link.name
                      ? "bg-(--color-brand-cream) text-[#1A1A1A]"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
