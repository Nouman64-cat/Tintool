import Image from "next/image";
import React from "react";
import logo from "@/public/tintool-png.png";
import { FaWandMagicSparkles } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Image
          src={logo}
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </div>
      <div>
        <button className="flex items-center gap-4 font-poppins bg-gradient-to-r from-primary via-blue-500 to-purple-600 text-white rounded-lg px-5 py-3 hover:opacity-90">
          <FaWandMagicSparkles />
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
