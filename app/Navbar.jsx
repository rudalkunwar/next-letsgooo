import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <ul className="flex justify-center px-2 py-3 bg-blue-500">
      <li className="px-2">
        <Link href="/home" className="text-gray-300 cursor-pointer">
          Home
        </Link>
      </li>
      <li className="px-2">
        <Link href="/about">About</Link>
      </li>
      <li className="px-2">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navbar;
