import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { ImMakeGroup } from "react-icons/im";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-20">
      <div className="bg-gradient-to-r from-primary via-blue-500 to-purple-500  text-white px-5 rounded-lg py-2 font-poppins font-light text-sm">
        <p>Generate color palette that enhance web design</p>
      </div>
      <div className="text-center flex flex-col items-center font-light text-zinc-600">
        <h1 className="text-9xl text-zinc-700 font-italiana">Tintool</h1>
        <p className="font-poppins w-[70%] text-sm">
          Your Ultimate Companion for Crafting Stunning Color Palettes, Tailored
          for Designers, Developers, and Creatives to Bring Vibrant Ideas to
          Life!
        </p>
      </div>
      <div className="mt-4">
        <button className="flex items-center gap-4 font-poppins font-normal bg-gradient-to-r from-primary via-blue-500 to-purple-600 text-white rounded-lg px-5 py-3 hover:opacity-90">
          <ImMakeGroup />
          Generate Palette
        </button>
      </div>
    </div>
  );
};

export default Hero;
