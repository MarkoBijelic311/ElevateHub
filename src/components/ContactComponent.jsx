import React from "react";
import waves from "../assets/layered-waves-haikei.svg";

function ContactComponent() {
  return (
    <div className="relative pb-60 font-arial" id="contact">
      <h1 className="text-4xl text-center pt-60 py-10 text-white">Zakaži</h1>
      <div className="flex container mx-auto px-5">
        <iframe src="https://calendly.com/alekandraandjelic/30min" className="mx-auto w-full max-w-[600px] aspect-[3/4] sm:aspect-[4/3] lg:h-[700px] h-[600px] justify-center rounded-lg shadow-lg mb-22 z-2" frameborder="0"></iframe>
      </div>
      <img src={waves} alt="" className="absolute bottom-0 w-full"/>
    </div>
  );
}

export default ContactComponent;
