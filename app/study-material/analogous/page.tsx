import React from "react";
import ColorCombinationContent from "@/app/components/content/ColorCombinationContent";
import { colorContentData } from "@/app/components/maincontent/DataContent";
const AnalogousPage = () => {
  return (
    <div className="mt-12 p-6">
      
      <ColorCombinationContent {...colorContentData.analogous} />
    </div>
  );
};

export default AnalogousPage;
