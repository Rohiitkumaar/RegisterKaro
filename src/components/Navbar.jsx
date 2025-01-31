import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-yellow-400 transition-colors">
          Home
        </a>

        {/* Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="hover:text-yellow-400 transition-colors flex items-center">
            Our Services <FaChevronDown className="ml-1 mt-1 text-sm" />
          </button>
          {dropdownOpen && (
            <div className="absolute bg-white text-gray-800 rounded shadow-lg mt-2 w-40">
              <a
                href="/service1"
                className="block px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                Service 1
              </a>
              <a
                href="/service2"
                className="block px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                Service 2
              </a>
              <a
                href="/service3"
                className="block px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                Service 3
              </a>
            </div>
          )}
        </div>

        <a href="/blog" className="hover:text-yellow-400 transition-colors">
          Blog
        </a>
        <a href="/contact" className="hover:text-yellow-400 transition-colors">
          Contact Us
        </a>
        <a href="/about" className="hover:text-yellow-400 transition-colors">
          About Us
        </a>
        <button
          aria-label="Search"
          className="hover:text-yellow-400 transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 15L19 19M1 9C1 11.1217 1.84285 13.1566 3.34315 14.6569C4.84344 16.1571 6.87827 17 9 17C11.1217 17 13.1566 16.1571 14.6569 14.6569C16.1571 13.1566 17 11.1217 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9Z"
              stroke="#212121"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors">
          Talk An Expert
        </button>

        {/* Mobile Menu Button */}
        <button className=" md:hidden" aria-label="Open Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
