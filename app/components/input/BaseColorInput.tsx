"use client";
import React from "react";
import { Wheel } from "@uiw/react-color";

interface BaseColorInputProps {
  baseColor: string;
  setBaseColor: (color: string) => void;
  onColorChange: () => void;
}

const BaseColorInput: React.FC<BaseColorInputProps> = ({
  baseColor,
  setBaseColor,
  onColorChange,
}) => {
  const handleColorChange = (color: any) => {
    const newColor = color.hex; // Get the selected color in HEX format
    setBaseColor(newColor); // Update the base color
    onColorChange(); // Trigger palette generation
  };

  return (
    <div className="flex flex-col items-center gap-4 font-poppins">
      {/* Color Wheel Picker */}
      <Wheel
        color={baseColor}
        onChange={handleColorChange}
      />

      <p className="text-sm font-poppins text-zinc-600">
        Selected Color: <span style={{ color: baseColor }}>{baseColor}</span>
      </p>
    </div>
  );
};

export default BaseColorInput;
