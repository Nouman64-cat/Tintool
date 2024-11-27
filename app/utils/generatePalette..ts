import chroma from "chroma-js";

/**
 * Generates an analogous color palette based on a base color.
 * @param baseColor - The base color to generate the palette from.
 * @param numberOfColors - The number of colors to generate (default is 5).
 * @returns An array of HEX color strings representing the palette.
 */
export const generatePalette = (baseColor: string, numberOfColors: number = 3): string[] => {
  return Array.from({ length: numberOfColors }, (_, i) =>
    chroma(baseColor).set("hsl.h", (chroma(baseColor).get("hsl.h") + i * 30) % 360).hex()
  );
};
