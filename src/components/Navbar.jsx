import React, { useState, useEffect } from "react";
import { ShoppingCart, User, Search, Moon, Sun, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contactUs" },
    { name: "Products", path: "/product" },
  ];

  return (
    <div className="bg-gray-50  transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between transition-colors duration-300">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-800 ">
            MyProject
          </span>
        </div>

        {/* Middle - Links + Search (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-gray-700  font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "relative inline-block text-blue-600 pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600"
                      : "relative inline-block transition hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search bar */}
          <div className="relative ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300  bg-gray-100  text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500  w-5 h-5" />
          </div>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-4 md:gap-5 text-gray-700 ">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className="hover:text-blue-600 transition"
          >
            {darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative hover:text-blue-600 transition"
            aria-label="Cart"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </NavLink>

          {/* Profile */}
          <NavLink
            to="/profile"
            className="hover:text-blue-600 transition"
            aria-label="Profile"
          >
            <User className="w-6 h-6" />
          </NavLink>
        </div>
      </nav>
            <div className="h-20 md:h-20"></div>

    </div>
  );
}

export default Navbar;
