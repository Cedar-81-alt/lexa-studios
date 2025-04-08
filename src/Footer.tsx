import { motion } from "framer-motion";
import {
  FaInstagram,
  FaXTwitter,
  FaBehance,
  FaDribbble,
  FaPinterest,
} from "react-icons/fa6";
import LEXADESIGN from "./assets/LEXADESIGN.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#4B0076] text-white p-8 w-full urbanist-regular">
      <div className="flex flex-col md:flex-row space-y-8  justify-between items-start">
        {/* Left Side */}
        <div className="text-left">
          <h4>Ready to get started?</h4>
          <p className="mt-4">
            Fill in the form and we will contact you right away!
          </p>
        </div>

        {/* Right Side - Form */}
        <div className=" space-y-2 md:mt-0">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-white/40 p-2 py-6 bg-transparent outline-none placeholder-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-white/40 p-2 py-6 bg-transparent outline-none placeholder-white"
            />
            <textarea
              placeholder="Type your message here"
              className="w-full border-b border-white/40 p-2 py-6 bg-transparent outline-none placeholder-white"
            />
          </form>
          <div>
            <button className="mt-10 md:mt-5 bg-white text-[#4B0076] px-6 py-2 urbanist-regular rounded-sm items-left">
              Send a message
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="md:w-2/3 mb-10 md:mt-0 mt-20  flex flex-col md:flex-row justify-between items-start">
        {/* LEXA Logo */}
        <img src={LEXADESIGN} alt="" className="w-20" />
      </div>

      {/* Divider */}
      <div className="border-t-2 border-white my-8"></div>

      {/* Navigation & Socials */}
      <div className=" justify-between  md:items-center item-end w-full">
        {/* Left Side - Links */}
        <div className="  flex flex-col md:flex md:space-x-10 mb-0 md:mb-10 md:flex-row md:space-y-0 space-y-10 text-[#DDDDDD]">
          <Link to="/about" className="hover:underline md:ml-0 ml-64 text-left">
            ABOUT
          </Link>
          <Link to="/services" className="hover:underline  md:ml-0 ml-64">
            SERVICES
          </Link>
          <Link to="/works" className="hover:underline  md:ml-0 ml-64">
            WORKS
          </Link>
          <Link to="/contact" className="hover:underline md:ml-0 ml-64">
            CONTACT
          </Link>
        </div>

        {/* Right Side - Social Media */}
        <div className="md:flex flex-none flex-wrap md:gap-32 gaps-5 md:space-y-0 space-y-10 justify-start w-full -mt-44 md:mt-4">
          <a
            href="#"
            className="flex items-center md:space-x-7  hover:underline"
          >
            <span className=" mr-10  md:mr-0">INSTAGRAM</span> <FaInstagram />
          </a>
          <a
            href="#"
            className="flex  md:space-x-7 items-center mt-5 md:mt-0 hover:underline"
          >
            <span className=" mr-14  md:mr-0">TWITTER </span> <FaXTwitter />
          </a>
          <a
            href="#"
            className="flex items-center  md:space-x-7 mt-5 md:mt-0 hover:underline"
          >
            <span className="mr-14  md:mr-0">BEHANCE</span> <FaBehance />
          </a>
          <a
            href="#"
            className="flex items-center   md:space-x-7  mt-5 md:mt-0 hover:underline"
          >
            <span className="mr-14  md:mr-0">DRIBBBLE</span> <FaDribbble />
          </a>
          <a
            href="#"
            className="flex items-center  md:space-x-7 mt-5 md:mt-0 hover:underline"
          >
            <span className="mr-12 md:mr-0">PINTEREST</span> <FaPinterest />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
