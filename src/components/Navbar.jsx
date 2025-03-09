import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = ["Home", "About", "Money", "Pages", "Blog", "Shop"];

  return (
    <header className="bg-white shadow-md">
      <nav className="p-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            className="h-16 bg-black"
            src="https://www.alphawizz.com/images/logo.svg"
            alt="AlphaWizz Logo"
          />
        </div>

        {/* Main Navigation (Inline on Desktop) */}
        <ul className="hidden md:flex gap-12 text-lg font-medium text-gray-800">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative hover:text-gray-600 cursor-pointer"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item}
              {openDropdown === index && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg border rounded-lg">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sub 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sub Item 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sub Item 3</li>
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Visible on Mobile and XL/2XL Screens) */}
        <button
          className="lg: xl: 2xl:hidden p-2 z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Fullscreen Overlay for Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-end text-black text-sm z-20">
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            <X size={40} />
          </button>

          {/* Main Navigation Links (for Mobile) */}
          <ul className="space-y-6 text-center">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative hover:text-gray-400 cursor-pointer"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item}
                {openDropdown === index && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg border rounded-lg">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Subbhddbjb 1</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sub Item 2</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sub Item 3</li>
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Account Section */}
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-semibold mb-4">Your Account</h3>
            <ul className="space-y-4">
              <li className="hover:text-gray-400 cursor-pointer">Profile</li>
              <li className="hover:text-gray-400 cursor-pointer">Work Preferences</li>
              <li className="hover:text-gray-400 cursor-pointer">My Boosted Shots</li>
              <li className="hover:text-gray-400 cursor-pointer">My Collections</li>
              <li className="hover:text-gray-400 cursor-pointer">Account Settings</li>
              <li className="hover:text-yellow-400 cursor-pointer font-semibold">Go Pro</li>
              <li className="hover:text-red-500 cursor-pointer">Sign Out</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

