import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className="bg-blue-400 flex justify-between items-center px-4 py-3 md:px-10">
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-white cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Treatments +</li>
            <li>Destinations</li>
            <li>Hospitals</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Request A Quote</li>
          </ul>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className="bg-blue-600 flex items-center md:mr-10 px-2 md:px-4">
          <button>
            <CiSearch size={24} className="text-white" />
          </button>
          <input
            placeholder="Search"
            className="p-2 bg-blue-600 text-white outline-none"
          />
        </div>
      </section>
      {isMenuOpen && (
        <nav className="bg-blue-400 p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-white cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Treatments +</li>
            <li>Destinations</li>
            <li>Hospitals</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Request A Quote</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
