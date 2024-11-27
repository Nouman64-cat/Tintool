import React from "react";

interface PaletteProps {
  colors: string[];
}

const Palette: React.FC<PaletteProps> = ({ colors }) => {
  return (
    <div className="flex flex-wrap justify-center mt-8 gap-4 font-poppins ">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-48 h-48 rounded-lg shadow-md flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <p className="text-md font-light text-white">{color}</p>
        </div>
      ))}
    </div>
  );
};

export default Palette;
