import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // State to control menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-black text-sm py-5 dark:bg-gray-900 fixed top-0 z-50">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between ml-6">
          <Link
            className="font-sans sm:order-1 flex-none text-3xl font-extrabold dark:text-white focus:outline-none focus:opacity-80 "
            to="/"
          >
            TodoMatrix
          </Link>
          <div className="sm:order-3 flex items-center gap-x-2">
            <button
              type="button"
              className="sm:hidden relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              onClick={toggleHamburgerMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              )}
              <span className="sr-only">Toggle</span>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2`}
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <Link
                to="/#about"
                className="font-medium text-blue-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/#how-to-use"
                className="font-medium text-blue-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                How to Use
              </Link>
              <Link
                to="/#gallery"
                className="font-medium text-blue-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/#testimonials"
                className="font-medium text-blue-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/#contact"
                className="font-medium text-blue-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
