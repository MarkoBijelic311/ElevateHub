import React, { useState } from "react";
import man from "../assets/man.png";
import improvement from "../assets/improvement.png";
import arrows from "../assets/two-arrows.png";
import attract from "../assets/attract-customers.png";
import circleService from "../assets/circleService.png";

function ServicesComponent({}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  let services = [
    {
      head: "Harrison Assessment",
      text: "Procena preferencija, snaga i mogucnosti za dalji razvoj. Harrison Assessment je inovativno rešenje koje omogućava brže i efikasnije prepoznavanje snaga i oblasti za razvoj kod zaposlenih. Ovaj assessment omogućava detaljan uvid u motivaciju zaposlenih i meri ponašajne osobine vezane za uspeh na konkretnom radnom mestu. Pored navedenog, ukoliko želite da smanjite vreme procesa selekcije, ovo je idealno rešenje.",
      img: man,
    },
    {
      head: "Lego® Serious Play® metodologija",
      text: "LSP® metodologija - metodologija koja je potekla iz same suštine onoga što LEGO čini jedinstvenim: mašta, kreativnost i praktično građenje. Ova metodologija koristi jedinstvenu moć mašte i metafore da unapredi poslovnu komunikaciju, timski rad i donošenje odluka. Kroz igru koja ima svrhu, dobijate prostor da izrazite svoje ideje, uvide i vizije na potpuno nov i vizuelan način. Za kreiranje strategija i planova, kockicu po kockicu. ",
      img: improvement,
    },
    {
      head: "Lego® Serious Play® metodologija",
      text: (
        <p>
          Program unapređenja poslovanja zasnovan na jedinstvenoj LSP®
          metodologiji. Kroz rad sa LEGO kockicama i facilitaciju koja podstiče
          kreativno razmišljanje, učesnici aktivno doprinose procesu kroz tzv. 
          „razmišljanje rukama“.Na taj način se podstiče dublje razumevanje i
          veća angažovanost.
          <br />
          <br />
          LSP® program za koučeve i HR stručnjake namenjen je onima koji žele
          da nauče kako da koriste ovu metodologiju u svom radu. LSP® je
          izuzetan alat, jer u proces unosi novu dimenziju – vizuelnu, taktilnu
          i metaforičku. Pomaže klijentima da „izađu iz glave i počnu da
          razmišljaju rukama“, čime se brže i dublje dolazi do uvida i rešenja.
        </p>
      ),
      img: arrows,
    },
    {
      head: "Koučing",
      text: "Individualni koučing – koučing je alat za lični razvoj. Kroz individualne sesije, kouč pomaže klijentima da identifikuju svoje snage, razviju samosvest i razviju strategiju za prevazilaženje izazova. Sesije su prilagođene klijentovim potrebama i ciljevima. Kroz personalizovan pristup zajedno prevazilazimo prepreke i postižemo ciljeve.",
      img: attract,
    },
  ];

  return (
    <div className="relative font-arial pt-10 py-30" id="services">
      <img
        src={circleService}
        alt=""
        className="absolute left-0 top-[20%] -z-10"
      />
      <h1 className="text-[#8B2318] text-center text-4xl font-bold">Usluge</h1>
      <div className="container mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mt-20 w-[60%]">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col z-10 items-center bg-[#F4F4F4] p-7 rounded-[22px] gap-10 hover:text-[#8B2318]"
            onMouseOver={() => setHoveredIndex(index)}
            onMouseOut={() => setHoveredIndex(null)}
          >
            <div className="flex justify-between items-center w-full">
              <h1
                className={`text-2xl ${
                  hoveredIndex === index ? "text-[#8B2318]" : "text-[#978674]"
                } transition-colors duration-700`}
              >
                {service.head}
              </h1>
              <img src={service.img} alt="" className="h-15 w-15" />
            </div>
            <p
              className={`w-full text-justify ${
                hoveredIndex === index ? "text-[#8B2318]" : "text-[#978674]"
              } transition-colors duration-300`}
            >
              {service.text}
            </p>
          </div>
        ))}
      </div>
      <img
        src={circleService}
        alt=""
        className="absolute right-0 top-[20%] h-[400px] rotate-180"
      />
    </div>
  );
}

export default ServicesComponent;
