import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import BtnLanguageToggle from "../ui/BtnLanguageToggle";
import logo from '../../assets/logo-removebg-preview.png'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white/50 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* <a href="#" className="text-2xl font-bold text-blue-600">
          <img
            style={{ width: "120px", height: "80px" , background:"black"}}
            src={logo}
            alt="Health Care"
          />
        </a> */}

        <h1 className=" font-bold text-blue-600 hover:text-red-600 transition duration-300">Health Unit</h1>
        <div className="hidden md:flex justify-between items-center space-x-8 ">
          <a
            href="#about"
            className=" font-bold text-gray-600 hover:text-blue-600 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className=" font-bold text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Services
          </a>

          <a
            href="#doctors"
            className=" font-bold text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Doctors
          </a>
        </div>
        {/* <BtnLanguageToggle/> */}
        <Link
          to="/login"
          className="hidden md:block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Login
        </Link>
        <button
          className="md:hidden text-gray-950 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoCloseSharp /> : <IoMenu />}
        </button>

        {/* المنيو الجانبية في الموبايل */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-6 gap-4 md:hidden">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#doctors" onClick={() => setIsOpen(false)}>
              Doctors
            </a>

            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
              <Link
                to="/login"
              >
                Login
              </Link>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
