import { React, useEffect, useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopComponent() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const navbarBottom = navbar.getBoundingClientRect().bottom;
        setShowButton(navbarBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <ScrollIntoView selector="#navbar">
        <button
          className="fixed bottom-6 right-6 bg-[#601810] hover:bg-[#8b2318] text-white px-3 py-3 rounded-full shadow-lg 
                    transition-all duration-30 ease-in-out z-50 transform hover:scale-110 
                    opacity-0 animate-fadeInOut"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-[15px]" />
        </button>
      </ScrollIntoView>
    )
  );
}

export default ScrollToTopComponent;
