const Footer = () => {
  return (
    <footer className="w-full bg-brand-bg text-text-gray py-16 px-6 lg:px-12 border-t border-brand-surface z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between lg:items-end space-y-16 md:space-y-0 text-xs">
        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-text-white leading-none">
            GRAFFICO®
          </h3>
          <p className="max-w-sm uppercase font-bold tracking-widest text-[#A6A6A6]">
            Architectural digital solutions for forward-thinking organizations.
          </p>
        </div>

        <div className="flex w-full md:w-1/2 justify-between lg:justify-end lg:space-x-24 border-t border-brand-surface pt-8 md:border-none md:pt-0">
          <div className="flex flex-col space-y-6">
            <h4 className="font-bold text-brand-acid uppercase tracking-widest text-[10px]">
              Index
            </h4>
            <a
              href="#"
              className="uppercase tracking-widest font-bold hover:text-text-white transition-colors interactive w-fit"
            >
              Services
            </a>
            <a
              href="#"
              className="uppercase tracking-widest font-bold hover:text-text-white transition-colors interactive w-fit"
            >
              Work
            </a>
            <a
              href="#"
              className="uppercase tracking-widest font-bold hover:text-text-white transition-colors interactive w-fit"
            >
              Agency
            </a>
            <a
              href="#"
              className="uppercase tracking-widest font-bold hover:text-text-white transition-colors interactive w-fit"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="font-bold text-brand-acid uppercase tracking-widest text-[10px]">
              Socials
            </h4>
            <a
              href="#"
              className="uppercase tracking-widest font-bold hover:text-text-white transition-colors interactive w-fit"
            >
              Twitter
            </a>
            <a
              href="#"
              className="uppercase tracking-widest font-bold hover:text-text-white transition-colors interactive w-fit"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="uppercase tracking-widest font-bold hover:text-text-white transition-colors interactive w-fit"
            >
              Instagram
            </a>
            <a
              href="#"
              className="uppercase tracking-widest font-bold hover:text-text-white transition-colors interactive w-fit"
            >
              Behance
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-brand-surface flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] uppercase tracking-widest font-bold">
        <p className="text-brand-acid">
          &copy; {new Date().getFullYear()} GRAFFICO. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a
            href="#"
            className="hover:text-text-white transition-colors interactive"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-text-white transition-colors interactive"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
