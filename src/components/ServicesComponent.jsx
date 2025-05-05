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
      text: "Procena preferencija, snaga i mogucnosti za dalji razvoj. Harrison Assessment je inovativno rešenje koje onogućava brže i efikasnije prepoznavanje snaga i oblasti za razvoj kod zaposlenih. Ovaj assessment omogućava detaljan uvid u motivaciju zaposlenih i meri ponašajne osobine vezane za uspeh na konkretnom radnom mestu. Pored navedenog, ukoliko želite da smanjite vreme procesa selekcije, ovo je idealno rešenje",
      img: man,
    },
    {
      head: "Lego® Serious Play® metodologija",
      text: "LSP® metodologija - metodologija koja je potekla iz same suštine onoga što LEGO čini jedinstvenim: mašta, kreativnost i praktično građenje. Ova metodologija koristi jedinstvenu moć mašte i metafore da unapredi poslovnu komunikaciju, timski rad i donošenje odluka. Kroz igru koja ima svrhu, dobijate prostor da izrazite svoje ideje, uvide i vizije na potpuno nov i vizuelan način. Za kreiranje strategija i planova kockicu po kockicu. ",
      img: improvement,
    },
    {
      head: "Lego® Serious Play® metodologija",
      text: (
        `Program unapređenje poslovanja kroz jedinsvenu LSP® metodologiju je dvodnevni program. Unapređenje poslovanja sa LEGO kockicama i fasilitaciju za podsticanje kreativnog mišljenja. Ova metodologija se bazira na ideji da svi učesnicii aktivni doprinose kroz “razmišljanje rukama”, čime se podstiče dublje razumevanje i veća angažovanost.
Program LSP® za kouce je dvodnevni program namenjen koučevima koji žele da nauče da koriste LSP® metodologiju. LSP® je fantastičan alat za kouceve, jer unosi novu dimenziju u koucing proces - vizuelnu, taktilnu i metaforičku. LSP® pomaže klijentima da “izađu iz glave i pričaju rukama”, čime se brže i dublje dolazi do uvida i rešenje`
      ),
      img: arrows,
    },
    {
      head: "Koučing",
      text: "Individulani koučing - koucing je alat za licni razvoj. Kroz individulane sesije, kouč pomaže klijentima da identifikuju svoje snage, razviju samosvest i razviju strategiju za prevazilaženje izazova. Sesije su prilagođene klijentovim potrebama i ciljevima. Kroz personalizivan pristup zajedno prevazilazimo prepreko i postižemo ciljeve.",
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
