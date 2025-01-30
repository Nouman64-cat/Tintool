import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="border-t px-5 py-2 font-poppins text-gray-700">
      <div className=" px-6 flex text-sm flex-col md:flex-row justify-between items-center">
        {/* Left Section*/}
        <div className="text-center md:text-left">
          <h2 className="text-1xl font-semibold">Tintool</h2>
          <div className="text-sm ">Generate & Explore Beautiful Color Palettes</div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="text-gray-700 hover:opacity-90">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:opacity-90">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:opacity-90">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Right Section:*/}
        <div className="text-center md:text-right mt-2">
          {/* Navigation Links*/}
          <nav className="flex justify-end space-x-3">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/blogs" className="hover:underline">
              Blogs
            </Link>
            <Link href="/magic" className="hover:underline">
              Magic
            </Link>
          </nav>

          <div className=" text-sm mt-2">@ 2025 Tintool. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
