import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <section className="bg-blue-400 flex justify-between">
        <nav className="p-6 mx-auto">
          <ul className="flex gap-6 text-white cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Treatments +</li>
            <li> Destinations</li>
            <li>Hospitals</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Request A Quote</li>
          </ul>
        </nav>
        <div className=" bg-blue-600 flex mr-10 px-4">
          <button className="">
            <CiSearch size={32} className="text-white" />
          </button>
          <input
            placeholder="Search"
            className="p-6 bg-blue-600  text-white"
          ></input>
        </div>
      </section>
    </>
  );
};

export default Navbar;
