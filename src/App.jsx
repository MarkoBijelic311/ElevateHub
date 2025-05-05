import ContactComponent from "./components/ContactComponent";
import HeroComponent from "./components/HeroComponent";
import NavbarComponent from "./components/NavbarComponent";
import ServicesComponent from "./components/ServicesComponent";

import ContactMeComponent from "./components/ContactMeComponent";
import FooterComponent from "./components/FooterComponent";
import ScrollToTopComponent from "./components/ScrollToTopComponent";

function App() {
  return (
    <>
      <div className="background-wrapper">
        <NavbarComponent />
        <HeroComponent />
      </div>
      <div className="relative z-0">
        <div className="relative w-full z-20 h-full">
          <ServicesComponent />
        </div>
        <div className="relative background-wrap">
          <ContactComponent />
        </div>
      </div>
      <ContactMeComponent />
      <FooterComponent />
      <ScrollToTopComponent />
    </>
  );
}

export default App;
