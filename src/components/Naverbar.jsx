
import { useState } from "react";
import Button from "./Button";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const initialItems = ["Home", "About", "Services", "Projects", "Blog", "Contact"];
  const [items] = useState(initialItems);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header>
      <nav className=" p-4 shadow-lg flex items-center justify-between">
        {/* Left side logo */}
        <div className=" text-xl font-bold">
          <a href="#">Logo</a>
        </div>

        {/* Centered menu items */}
        <ul className="flex gap-6 text-gray-800 uppercase">
          {items.map((item, index) => (
            item === "Home" ? (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="#" className="hover:text-yellow-400 transition-all duration-300 flex items-center gap-2">
                {item} <IoMdArrowDropdown className="text-xl" />
                </a>
                {isDropdownOpen && (
                  <ul className="absolute left-0 bg-gray-700 text-white mt-2 py-2 px-4 rounded shadow-lg w-48 z-10 pointer-events-auto">
                    <li className="hover:text-yellow-400 transition-all duration-300">
                      <a href="#">Option 1</a>
                    </li>
                    <li className="hover:text-yellow-400 transition-all duration-300">
                      <a href="#">Option 2</a>
                    </li>
                    <li className="hover:text-yellow-400 transition-all duration-300">
                      <a href="#">Option 3</a>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li key={index} className="hover:text-yellow-400 transition-all duration-300">
                <a href="#">{item}</a>
              </li>
            )
          ))}
        </ul>

        {/* Right side Contact button */}
        <Button/>
      </nav>
    </header>
  );
};

export default Navbar;

