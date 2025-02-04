const TriadicPage = () => {
    return (
      <div className="p-6">
        {/* Heading with rounded ends and background color */}
        <div className="bg-blue-400 mt-12 text-white text-2xl font-bold p-4 rounded-full w-max mb-6">
          Triadic Colors
        </div>
  
        <h2 className="text-xl font-semibold text-gray-700 mb-4">What are Triadic Colors?</h2>
  
        <p className="text-gray-700 mb-4">
          A triadic color scheme uses three colors that are evenly spaced on the color wheel. Triadic schemes are vibrant and allow for rich color contrasts.
        </p>
        <p className="text-gray-700 font-semibold">
          Triadic color schemes work well for:
          </p>

        <ul className="list-disc font-thin pl-5 mt-2">
            <li>Vibrant designs</li>
            <li>Artistic compositions</li>
            <li>Designs that require high contrast</li>
        </ul>
  
        <p className="text-gray-700 mt-4">
          A good example would be combining red, blue, and yellow to create a bold, dynamic palette.
        </p>
      </div>
    );
  };
  
  export default TriadicPage;
  