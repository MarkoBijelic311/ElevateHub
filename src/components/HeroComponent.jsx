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
            Moj rad je stvaranje prostora u kom možeš da budeš iskreno ti – bez
            pritiska da budeš bolji, drugačiji ili "popravljen". Radim sa
            timovima, organizacijama i HR profesionalcima koji žele da otvore
            prostor za dublju refleksiju, bolju saradnju i smisleniji rast.
            Radim sa preduzetnicima koji žele da unaprede svoje poslovanje.
            Koristim Harrison Assessment da ti pomognem da jasno sagledaš svoje
            vrednosti, motivaciju i unutrašnje pokretače. Kroz LEGO® SERIOUS
            PLAY®, otvaramo dijalog kroz ruke i igru. Ne govorimo o rešenjima –
            već ih gradimo. Zajedno. Gradimo prostor u kom ćeš da zastaneš, da
            se povežeš sa sobom i drugima – i da jasno vidiš gde si i šta ti je
            važno. Ako ti to ima smisla – tu sam. Rast. Razvoj. Razgovor. LEGO®.
          </p>
        </div>
        <img src={prava} alt="" className="sm:w-[50%] md:mt-40 mx-auto" />
      </div>
    </div>
  );
}

export default HeroComponent;
