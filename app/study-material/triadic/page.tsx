import React from "react";
import ColorCombinationContent from "@/app/components/content/ColorCombinationContent";
import { colorContentData } from "@/app/components/maincontent/DataContent";
const TriadicPage = () => {
  return (
    <div className="mt-12 p-6">
      
      <ColorCombinationContent {...colorContentData.triadic} />
    </div>
  );
};

export default TriadicPage;
