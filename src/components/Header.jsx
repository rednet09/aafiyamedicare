import { FaLaptopFile } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa";
import Navbar from "./Navbar";
import Button from "./Button";
const Header = () => {
  const contactDetails = [
    {
      text1: "Second medical option",
      text2: "Book Consultation",
      img: <FaLaptopFile size={32} />,
    },
    {
      text1: "Call Us On",
      text2: "9762785517",
      img: <LuPhoneCall size={32} />,
    },
    {
      text1: "Email Us On",
      text2: "info@mediatreats.com",
      img: <IoMailOpenOutline size={32} />,
    },
  ];

  return (
    <>
      <header className="mx-auto">
        <section className="flex flex-wrap justify-evenly">
          <img src="./images/Logo.png" alt="Logo" className="w-24" />

          {contactDetails.map((details) => {
            return (
              <>
                <div className="flex items-center justify-between gap-4 p-2">
                  {details.img}
                  <div>
                    <p className="text-sm pb-2">{details.text1}</p>
                    <p className="text-sm font-bold text-left">
                      {details.text2}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </section>
        <Navbar />
        <section className="bg-[url('./images/knee.webp')] bg-cover bg-center bg-no-repeat w-full h-[250px] ">
          <div className="mx-28 py-5">
            <ul className="flex gap-4 text-white font-bold items-center pb-6">
              <li>Home</li>
              <FaGreaterThan color="red" />
              <li>Treatments</li>
              <FaGreaterThan color="red" />
              <li>Orthopedics</li>
              <FaGreaterThan color="red" />
              <li>Knee replacement</li>
            </ul>
            <h2 className="text-2xl font-bold text-white pb-2">
              Total Knee Replacement
            </h2>
            <h3 className="text-xl font-semibold text-white w-2/4">
              Total knee replacement is a surgery to remove and replace the
              whole damaged knee joint
            </h3>
            <div className="py-6">
              <Button name="Enquire Now" />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
