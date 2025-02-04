import React from "react";
import ColorCombinationCard from "../components/cards/ColorCombinationCard";

const cardsInfo = [
  {
    heading: "Complementary",
    description: "Colors opposite each other on the color wheel. High contrast.",
    img: "/complementary.jpeg",
  },
  {
    heading: "Monochromatic",
    description: "Different shades, tones, and also tints of a single color.",
    img: "/monochromatic.jpeg",
  },
  {
    heading: "Analogous",
    description: "Colors that are next to each other on the color wheel.",
    img: "/analogous.jpeg",
  },
  {
    heading: "Triadic",
    description: "Three colors are quite evenly spaced on the color wheel.",
    img: "/triadic.jpeg",
  },
  {
    heading: "Tetradic",
    description: "Four colors forming a rectangle on the color wheel.",
    img: "/tetradic.jpeg",
  },
];

const StudyMaterialPage = () => {
  return (
    <div className="p-6 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsInfo.map((card, index) => (
        <ColorCombinationCard 
          key={index}
          heading={card.heading}
          description={card.description}
          img={card.img}
        />
      ))}
    </div>
  );
};

export default StudyMaterialPage;
