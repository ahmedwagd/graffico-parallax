import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row items-end md:items-center space-y-6 md:space-y-0 md:space-x-8 text-right md:text-left z-20">
      <div className="flex flex-col items-end md:items-start text-right">
        <span className="text-(--color-brand-red) text-3xl md:text-4xl lg:text-5xl font-shrikhand font-bold italic leading-none mb-1">
          15+
        </span>
        <span className="text-white text-[0.85rem] font-sans font-semibold tracking-[0.12em] uppercase">
          INDUSTRIES
        </span>
      </div>

      <div className="hidden md:block w-px h-16 bg-[rgba(255,255,255,0.2)]"></div>

      <div className="flex flex-col items-end md:items-start text-right">
        <span className="text-(--color-brand-red) text-3xl md:text-4xl lg:text-5xl font-shrikhand font-bold italic leading-none mb-1">
          5+
        </span>
        <span className="text-white text-[0.85rem] font-sans font-semibold tracking-[0.12em] uppercase">
          YEARS
        </span>
      </div>
    </div>
  );
};

export default Stats;
