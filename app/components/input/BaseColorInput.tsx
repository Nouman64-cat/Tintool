"use client";
import React from "react";
import { HexColorPicker } from "react-colorful";

interface BaseColorInputProps {
  baseColor: string;
  setBaseColor: (color: string) => void;
  onColorChange: () => void;
}

const BaseColorInput: React.FC<BaseColorInputProps> = ({ baseColor, setBaseColor, onColorChange }) => {
  const handleColorChange = (color: string) => {
    setBaseColor(color); // Update base color
    onColorChange(); // Trigger palette generation
  };

  return (
    <div className="flex flex-col items-center gap-4 font-poppins">
      {/* Color Wheel Picker */}
      <HexColorPicker
        color={baseColor}
        onChange={handleColorChange}
        className="w-80 h-80 rounded-full"
        
      />
      <p className="text-sm font-poppins text-zinc-600">
        Selected Color: <span style={{ color: baseColor }}>{baseColor}</span>
      </p>
    </div>
  );
};

export default BaseColorInput;
