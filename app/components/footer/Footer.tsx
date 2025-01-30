import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="border-t font-poppins text-gray-900 px-16 py-8">
      <div className=" px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section*/}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Tintool</h2>
          <div className="text-sm">Generate & Explore Beautiful Color Palettes</div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a href="#" className="text-gray-900 hover:opacity-90">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-900 hover:opacity-90">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-900 hover:opacity-90">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Right Section:*/}
        <div className="text-center md:text-right mt-6">
          {/* Navigation Links*/}
          <nav className="flex justify-end space-x-6">
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

          <div className=" text-sm mt-4">@ 2025 Tintool. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
