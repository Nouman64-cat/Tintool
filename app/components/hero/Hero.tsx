"use client";
import React, { useState, useEffect } from "react";
import Palette from "../palette/Palette";
import BaseColorInput from "../input/BaseColorInput";
import BlobWrapper from "../wrapper/BlobWrapper";
import { generatePalette } from "@/app/utils/generatePalette.";


const Hero = () => {
  const [baseColor, setBaseColor] = useState<string>("#db3db9"); // Default base color
  const [palette, setPalette] = useState<string[]>([]);

  // Automatically generate palette when baseColor changes
  useEffect(() => {
    const generatedPalette = generatePalette(baseColor); // Generate palette from base color
    setPalette(generatedPalette);
  }, [baseColor]); // Triggered whenever baseColor changes

  return (
    <BlobWrapper palette={palette}>
      <div className="flex flex-col items-center gap-4 mt-16 relative z-10">
        <div className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 text-white px-5 rounded-lg py-2 font-poppins font-light text-sm">
          <p>Generate color palettes that enhance web design</p>
        </div>
        <div className="text-center flex flex-col items-center font-light text-zinc-600">
          <h1 className="text-9xl text-zinc-700 font-italiana">Tintool</h1>
          <p className="font-poppins w-[70%] text-sm">
            Your Ultimate Companion for Crafting Stunning Color Palettes,
            Tailored for Designers, Developers, and Creatives to Bring Vibrant
            Ideas to Life!
          </p>
        </div>
        {/* Base Color Input Component */}
        <BaseColorInput
          baseColor={baseColor}
          setBaseColor={setBaseColor}
          onColorChange={() => {}} // No need to pass a handler since useEffect handles changes
        />
        {/* Palette Component */}
        {palette.length > 0 && <Palette colors={palette} />}
      </div>
    </BlobWrapper>
  );
};

export default Hero;
