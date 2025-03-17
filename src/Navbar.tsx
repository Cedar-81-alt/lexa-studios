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
    <nav className="relative flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 text-black dark:text-white border-b-[2px] border-gray-400">
      <div className="flex items-center gap-4">
        <img src={LEXADESIGN} alt="Lexa Design" className="w-24" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-6 text-lg font-medium uppercase tracking-wide">
          <li><Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400">About</Link></li>
          <li><Link to="/services" className="hover:text-purple-600 dark:hover:text-purple-400">Services</Link></li>
          <li><Link to="/works" className="hover:text-purple-600 dark:hover:text-purple-400">Works</Link></li>
          <li><Link to="/contact" className="hover:text-purple-600 dark:hover:text-purple-400">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-50" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu (Sliding In) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-[#27013D] shadow-lg flex flex-col px-6 py-6 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button onClick={toggleMobileMenu} className="absolute top-5 right-5 text-3xl">
          <FaTimes />
        </button>

        {/* Left-aligned Links - Moved Down with mt-16 */}
        <ul className="mt-16 flex flex-col space-y-6 text-lg font-medium uppercase tracking-wide items-start text-left pl-4">
          <li><Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400">About</Link></li>
          <li><Link to="/services" className="hover:text-purple-600 dark:hover:text-purple-400">Services</Link></li>
          <li><Link to="/works" className="hover:text-purple-600 dark:hover:text-purple-400">Works</Link></li>
          <li><Link to="/contact" className="hover:text-purple-600 dark:hover:text-purple-400">Contact</Link></li>
        </ul>

        {/* Dark Mode Toggle (Inside Mobile Menu) */}
        <button
          onClick={toggleDarkMode}
          className={`relative flex items-center w-24 h-10 rounded-full transition-all duration-300 ${
            darkMode ? "bg-[#FDF8E6]" : "bg-[#3D1D5A]"
          }`}
        >
          {/* Sun Icon (Light Mode) */}
          <div className="absolute left-1 w-8 h-8 flex items-center justify-center">
            <Sun className="w-6 h-6 text-[#3D1D5A]" />
          </div>

          {/* Moon Icon (Dark Mode) */}
          <div className="absolute right-1 w-8 h-8 flex items-center justify-center">
            <Moon className="w-6 h-6 text-[#FDF8E6]" />
          </div>

          {/* Toggle Circle */}
          <div
            className={`absolute w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${
              darkMode ? "md:translate-x-[28px] translate-x-[22px] " : "md:translate-x-[28px] translate-x-[-22px]"
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
