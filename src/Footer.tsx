import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter, FaBehance, FaDribbble, FaPinterest } from "react-icons/fa6";
import LEXADESIGN from './assets/LEXADESIGN.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#4B0076] text-white p-8  w-full">
      <div
        className="flex flex-col md:flex-row  justify-between items-start"
       
      >
        {/* Left Side */}
        <div className="text-left">
          <h3 className="text-2xl font-bold">Ready to get started?</h3>
          <p className="mt-2">Fill in the form and we will contact you right away!</p>
        </div>
        
        {/* Right Side - Form */}
        <div className=" md:mt-0">
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full border-b-2 border-white p-2 bg-transparent outline-none placeholder-white" />
            <input type="email" placeholder="Email Address" className="w-full border-b-2 border-white p-2 bg-transparent outline-none placeholder-white" />
            <textarea placeholder="Type your message here" className="w-full border-b-2 border-white p-2 bg-transparent outline-none placeholder-white" />
           
          </form>
          <div>
          <button className="mt-10 md:mt-5 bg-white text-[#4B0076] px-6 py-2 rounded-sm items-left">Send a message</button>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="md:w-2/3 mb-10 md:mt-0 mt-10  flex flex-col md:flex-row justify-between items-start">
        {/* LEXA Logo */}
       <img src={LEXADESIGN} alt="" className="w-20" />
      
      </div>
      
      {/* Divider */}
      <div className="border-t-2 border-white my-8"></div>
      
      {/* Navigation & Socials */}
      <div className=" justify-between md:items-center item-end w-full">
        {/* Left Side - Links */}
        <div className=" md:space-x-6 space-x-2   text-[#DDDDDD]">
          <Link to="/about">ABOUT</Link>
          <Link to="/services" className="hover:underline">SERVICES</Link>
          <Link to="/works" className="hover:underline">WORKS</Link>
          <Link to="/contact" className="hover:underline">CONTACT</Link>
        </div>
        
        {/* Right Side - Social Media */}
        <div className="md:flex flex-none flex-wrap md:gap-32 gaps-5 justify-start w-full mt-4 md:mt-4">
          <a href="#" className="flex items-center md:space-x-7 space-x-3  hover:underline">
            <span className="">INSTAGRAM</span> <FaInstagram />
          </a>
          <a href="#" className="flex items-center md:space-x-7 space-x-10 mt-5 md:mt-0 hover:underline">
            <span>TWITTER </span> <FaXTwitter />
          </a>
          <a href="#" className="flex items-center md:space-x-7 space-x-8  mt-5 md:mt-0 hover:underline">
            <span>BEHANCE</span> <FaBehance />
          </a>
          <a href="#" className="flex items-center  md:space-x-7 space-x-8  mt-5 md:mt-0 hover:underline">
            <span>DRIBBBLE</span> <FaDribbble />
          </a>
          <a href="#" className="flex items-center md:space-x-7 space-x-6  mt-5 md:mt-0 hover:underline">
            <span>PINTEREST</span> <FaPinterest />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
