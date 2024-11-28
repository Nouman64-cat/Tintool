import React from "react";

interface BlobWrapperProps {
  palette: string[]; // Use palette directly instead of generating colors
  children: React.ReactNode; // Content inside the wrapper
}

const BlobWrapper: React.FC<BlobWrapperProps> = ({ palette, children }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Blob 1 */}
      {palette[0] && (
        <div
          className="absolute w-72 h-72 rounded-full mix-blend-multiply animate-float"
          style={{
            backgroundColor: palette[0],
            top: "10%",
            left: "5%",
          }}
        ></div>
      )}
      {/* Blob 2 */}
      {palette[1] && (
        <div
          className="absolute w-80 h-80 rounded-full mix-blend-multiply animate-float"
          style={{
            backgroundColor: palette[1],
            top: "80%",
            left: "75%",
          }}
        ></div>
      )}
      {/* Blob 3 */}
      {palette[2] && (
        <div
          className="absolute w-64 h-64 rounded-full mix-blend-multiply animate-float"
          style={{
            backgroundColor: palette[2],
            top: "20%",
            left: "80%",
          }}
        ></div>
      )}
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BlobWrapper;
