import React from "react";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import waves from "../assets/layered-waves-haikei (2).svg";
import logo from "../assets/logoText.png";
import ha from "../assets/ha.png";

function ContactMeComponent() {
  return (
    <div
      className="relative py-30 font-arial text-[#8B2318] bg-[rgb(235,231,223)]"
      id="contactMe"
    >
      {/* <img src={eclipse} alt="" className="absolute top-0 left-0 h-70 w-70" /> */}
      {/* <div className="absolute top-0 left-0 h-60 w-60 bg-[#8B2318] rounded-br-full"></div> */}
      <img src={waves} alt="" className="absolute w-full top-0" />

      <div className="flex flex-col lg:flex-row mx-auto container items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center pt-20 lg:pt-0 z-10 gap-5">
          <img src={logo} alt="" className="w-[30%]" />
          <h1 className="text-[64px] text-center pt-10 lg:pt-0">
            Aleksandra Anđelić
          </h1>
          <img src={ha} className="w-[40%]"/>
        </div>
        <div className="flex flex-col gap-10 pt-1 lg:pl-80 z-10">
          <h1 className="text-[64px] mx-auto lg:m-0 pt-30 text-justfiy">
            Kontakt
          </h1>
          <p className="text-2xl w-[70%] lg:text-justify text-center mx-auto lg:m-0">
            Želite li da unapredite sebe i vaš tim? Javite mi se i zajedno ćemo
            osmisliti inovativna rešenja za efikasnije poslovanje i bolje
            rezultate. Radujem se novim saradnjama i poznanstvima!
          </p>
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <FaPhoneAlt className="text-3xl" />
            <span className="text-2xl pl-5 text-center lg:text-justify">
              060 64 69 991
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <FaLinkedin className="text-4xl" />
            <a
              href="http://linkedin.com/in/aleksandra-andjelic-03b796110"
              className="text-2xl pl-5 text-center lg:text-left"
            >
              Connect with me on LinkedIn
            </a>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <RiInstagramFill className="text-4xl" />
            <a
              href="https://www.instagram.com/elevate.koucing?igsh=MW1yODBhY3lidm1zbw=="
              className="text-2xl pl-5 text-center lg:text-justify"
            >
              Follow Elevate Koučing on Instagram
            </a>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 items-center pb-20">
            <BiLogoGmail className="text-4xl" />
            <a
              href="mailto:alekandraandjelic@gmail.com"
              className="text-2xl pl-5 text-center lg:text-justify"
            >
              Get in touch via Email
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-20 w-20 md:h-40 md:w-40 bg-[#8B2318] rounded-tl-full"></div>
      <div className="absolute bottom-0 left-0 h-20 w-20 md:h-40 md:w-40 bg-[#8B2318] rounded-tr-full"></div>
    </div>
  );
}

export default ContactMeComponent;
