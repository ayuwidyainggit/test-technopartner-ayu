import React from "react";
import { Text7 } from "./Text";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white px-2  ">
      <div className="flex justify-center items-center pt-4 pb-4">
        <Text7 text="MENU" />
      </div>
      <div className="overflow-x-auto">
        <ul className="flex whitespace-nowrap">
          <li className="inline-block px-3 pb-4 hover:border-b-4 hover:border-black">
            <a href="#" className="hover:text-black text-gray-300">
              Sesoal Produk
            </a>
          </li>
          <li className="inline-block px-3 pb-4 hover:border-b-4 hover:border-black">
            <a href="#" className="hover:text-black text-gray-300">
              Best Seller
            </a>
          </li>
          <li className="inline-block px-3 pb-4 hover:border-b-4 hover:border-black">
            <a href="#" className="hover:text-black text-gray-300">
              Menu Item 3
            </a>
          </li>
          <li className="inline-block px-3 pb-4 hover:border-b-4 hover:border-black">
            <a href="#" className="hover:text-black text-gray-300">
              Menu Item 4
            </a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
