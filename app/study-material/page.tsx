import React from "react";
import ColorCombinationCard from "../components/cards/ColorCombinationCard";

const cardsInfo = [
  {
    heading: "Complementary Colors",
    description: "Opposite colors on the wheel that create maximum contrast and vibrancy. Perfect for creating bold, attention-grabbing designs. Ideal for call-to-action buttons and highlight elements.",
    img: "/complementary.jpeg",
  },
  {
    heading: "Monochromatic Harmony",
    description: "Sophisticated variations of a single hue using different tones, shades, and tints. Creates cohesive, elegant designs with subtle visual hierarchy. Excellent for minimal interfaces and professional layouts.",
    img: "/monochromatic.jpeg",
  },
  {
    heading: "Analogous Blends",
    description: "Neighboring colors that create harmonious and comfortable palettes. Offers low contrast while maintaining visual interest. Perfect for backgrounds and natural-themed designs.",
    img: "/analogous.jpeg",
  },
  {
    heading: "Triadic Balance",
    description: "Three equally spaced colors forming a vibrant yet balanced triangle. Provides strong visual contrast while maintaining harmony. Great for playful designs and brand identities.",
    img: "/triadic.jpeg",
  },
  {
    heading: "Tetradic Complexity",
    description: "Four-color scheme forming a rectangle for rich, complex palettes. Offers maximum variety while maintaining balance. Best for experienced designers creating dynamic layouts.",
    img: "/tetradic.jpeg",
  },
];

const StudyMaterialPage = () => {
  return (
    <div className="p-6 mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
