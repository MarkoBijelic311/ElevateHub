import { React, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import ScrollIntoView from "react-scroll-into-view";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="bg-[rgba(151,134,116,0.84)] z-10 font-arial font-bold" id="navbar">
      <div className="flex px-4 md:px-0 justify-between items-center h-20 mx-auto container py-12">
        <img
          src={logo}
          alt="logo"
          className="flex items-center h-20 w-20 mt-5"
        />
        <div className="flex gap-10 text-white text-xl text-md">
          {/* Desktop links */}
          <ul className="hidden md:flex space-x-6 text-white">
            <ScrollIntoView selector="#hero">
              <li>
                <a
                  href="#"
                  className="relative inline-block after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] 
             after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out
             hover:after:scale-x-100"
                >
                  O meni
                </a>
              </li>
            </ScrollIntoView>
            <ScrollIntoView selector="#services">
              <li>
                <a
                  href="#"
                  className="relative inline-block after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] 
             after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out 
             hover:after:scale-x-100"
                >
                  Usluge
                </a>
              </li>
            </ScrollIntoView>

            <ScrollIntoView selector="#contact">
              <li>
                <a
                  href="#"
                  className="relative inline-block after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] 
             after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out 
             hover:after:scale-x-100"
                >
                  Zakaži
                </a>
              </li>
            </ScrollIntoView>

            <ScrollIntoView selector="#contactMe">
              <li>
                <a
                  href="#"
                  className="relative inline-block after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] 
             after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out 
             hover:after:scale-x-100"
                >
                  Kontakt
                </a>
              </li>
            </ScrollIntoView>
          </ul>

          {!isOpen && (
            <button
              className="md:hidden z-50"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          <div
            className={`fixed inset-0 bg-[#978674] bg-opacity-90 z-[999] flex flex-col items-center justify-center space-y-10 text-white text-2xl
    transition-transform duration-500 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <ScrollIntoView selector="#hero">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8B2318] transition duration-300"
              >
                O meni
              </a>
            </ScrollIntoView>

            <ScrollIntoView selector="#services">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8B2318] transition duration-300"
              >
                Usluge
              </a>
            </ScrollIntoView>

            <ScrollIntoView selector="#contact">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8B2318] transition duration-300"
              >
                Zakaži
              </a>
            </ScrollIntoView>

            <ScrollIntoView selector="#contactMe">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8B2318] transition duration-300"
              >
                Kontakt
              </a>
            </ScrollIntoView>

            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
