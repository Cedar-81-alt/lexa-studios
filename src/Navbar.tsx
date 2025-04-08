import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import LEXADESIGN from "./assets/LEXADESIGN.png";

// Define the props type
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative urbanist-regular flex justify-between items-center  py-4 bg-white dark:bg-dark-violet text-black dark:text-white border-b-2 border-[#B743C6]/50">
      <div className="flex items-center gap-4">
        <img src={LEXADESIGN} alt="Lexa Design" className="w-24" />
      </div>

      {/* Desktop Menu (Moved to End) */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        <ul className="flex gap-6 text-lg font-medium uppercase tracking-wide">
          <li>
            <Link
              to="/"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/works"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Dark Mode Toggle (Visible on Large Screens) */}
      <div className="hidden md:flex ml-6">
        <button
          onClick={toggleDarkMode}
          className={`relative flex items-center w-24 h-10 rounded-full transition-all duration-300 ${
            darkMode ? "bg-[#FDF8E6]" : "bg-[#3D1D5A]"
          }`}
        >
          {/* Sun Icon */}
          <div className="absolute left-1 w-8 h-8 flex items-center justify-center">
            <Sun className="w-6 h-6 text-[#3D1D5A]" />
          </div>

          {/* Moon Icon */}
          <div className="absolute right-1 w-8 h-8 flex items-center justify-center">
            <Moon className="w-6 h-6 text-[#FDF8E6]" />
          </div>

          {/* Toggle Circle */}
          <div
            className={`absolute w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${
              darkMode ? "translate-x-[28px]" : "translate-x-[-28px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 text-[#B743C6] py-3"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>

      {/* Mobile Menu (Sliding In) */}
      <div
        className={`fixed z-50 top-0 right-0 h-full w-64 bg-white dark:bg-[#27013D] shadow-lg flex flex-col px-6 py-6 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMobileMenu}
          className="absolute top-5 text-[#B743C6] pt-6 pr-6 right-5 text-3xl bg-none"
        >
          <FaTimes />
        </button>

        {/* Left-aligned Links - Moved Down with mt-32 */}
        <ul className="mt-20 flex flex-col  space-y-6 text-lg font-medium uppercase tracking-wide items-start text-left pl-4">
          <li>
            <Link
              to="/"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/works"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Dark Mode Toggle (Inside Mobile Menu) */}
        <div className="mt-10 flex justify-start">
          <button
            onClick={toggleDarkMode}
            className={`relative flex items-center w-24 h-10 rounded-full transition-all duration-300 ${
              darkMode ? "bg-[#FDF8E6]" : "bg-[#3D1D5A]"
            }`}
          >
            {/* Sun Icon */}
            <div className="absolute left-1 w-8 h-8 flex items-center justify-center">
              <Sun className="w-6 h-6 text-[#3D1D5A]" />
            </div>

            {/* Moon Icon */}
            <div className="absolute right-1 w-8 h-8 flex items-center justify-center">
              <Moon className="w-6 h-6 text-[#FDF8E6]" />
            </div>

            {/* Toggle Circle */}
            <div
              className={`absolute w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${
                darkMode
                  ? "translate-x-[22px] md:translate-x-[28px]"
                  : "md:translate-x-[-28px] translate-x-[-22px]"
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
