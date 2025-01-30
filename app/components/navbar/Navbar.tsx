import Image from "next/image";
import React from "react";
import logo from "@/public/tintool-png.png";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Link from "next/link";



function Navbar() {
  const newLocal = <Image src={logo} alt="Tintool Logo" width={100} height={100} />;
  return (
    <div className="w-full flex justify-between items-center bg-white fixed top-0 left-0 z-50 mb-4 px-5 py-2">
      {/* Logo */}
      <div>
        {newLocal}
      </div>

      {/* Center Links */}
      <div className="flex gap-4">
        <Link href="/" className="text-gray-700 font-poppins hover:opacity-90">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 font-poppins hover:opacity-90">
          About
        </Link>
        <Link href="/blogs" className="text-gray-700 font-poppins hover:opacity-90">
          Blogs
        </Link>
        <Link href="/magic" className="text-gray-700 font-poppins hover:opacity-90">
          Magic
        </Link>
      </div>

      {/* Button */}
      <div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg px-5 py-3 hover:opacity-90">
          <FaWandMagicSparkles />
          Surprise me
        </button>
      </div>
    </div>
  );
}


export default Navbar;
