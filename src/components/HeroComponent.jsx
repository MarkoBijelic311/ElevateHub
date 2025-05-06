import React from "react";
import prava from "../assets/heroSectionImage.png";

function HeroComponent() {
  return (
    <div className="bg-[rgba(151,134,116,0.84)] pt-40 z-10 relative" id="hero">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="text-white flex flex-col font-arial gap-10 justify-center items-center md:justify-normal lg:items-baseline">
          <h1 className="text-[64px] text-center md:text-left opacity-100 font-bold">
            Zovem se Aleksandra
          </h1>
          <p className="w-[80%] text-[17px]/7 letter text-center lg:text-justify opacity-100 md:pb-10 font-semibold">
            Moj rad je usmeren na stvaranje prostora za
            stvarnu introspekciju, gde ne postoji "bolja verzija sebe", vec samo
            autentična verzija tvoje unutrašnje snage. Koristim Harrison
            Assessment da bih ti pomogla da razjasniš svoje prave vrednosti,
            motivaciju i potencijale, bez predrasuda ili šablonaskih pristupa.
            Kroz LEGO® SERIOUS PLAY® metodologiju, stvaram okruženje u
            kojem se kroz igru i kreativnost otrkivaju rešenja i strategije koje
            su skrivene u tebi i tvom timu. Moj pristup nije da te "popravim",
            već da te vidim - stvarno i bez filtera. Ako si spreman da se uputiš
            u duboku refleksiju i pravi korak ka promenama koje dolaze iznutra,
            onda si na pravom mestu. Rast, radionice i LEGO®.
          </p>
        </div>
        <img src={prava} alt="" className="sm:w-[50%] md:mt-40 mx-auto" />
      </div>
    </div>
  );
}

export default HeroComponent;
