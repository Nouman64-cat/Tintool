import Link from "next/link";
import Image from "next/image";

interface ColorCombinationCardProps {
  heading: string;
  description: string;
  img: string;
}

const ColorCombinationCard: React.FC<ColorCombinationCardProps> = ({
  heading,
  description,
  img,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center space-y-3">
      <Image
        src={img}
        alt={heading}
        width={128}
        height={128}
        className="object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold">{heading}</h2>
      <p className="text-gray-600 text-center">{description}</p>

      <Link href={`/study-material/${heading.toLowerCase()}`} 
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">      
        Learn More
      </Link>
    </div>
  );
};

export default ColorCombinationCard;
