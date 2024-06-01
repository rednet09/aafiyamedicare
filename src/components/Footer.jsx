import Button from "./Button";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <section className="">
        <div className="bg-blue-500 text-center mx-auto py-10">
          <h3 className="text-white font-semibold">
            Stay healthy and happy to enjoy life
          </h3>
          <h2 className="text-2xl font-bold text-white">
            We have a team of health care experts
          </h2>
          <div className="flex justify-center pt-10">
            <Button name="Get In Touch" />

            <p className="text-white font-semibold p-4">+91 8087080042</p>
          </div>
        </div>
        <footer className="bg-[#0B2432] text-white py-10 px-8">
          <div className="container mx-auto flex flex-wrap justify-around">
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">Important Links</h3>
              <ul>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">Top Hospitals</h3>
              <ul>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Apollo Hospital
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Medanta Hospital
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Jaslok Hospital
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">Speciality Treatments</h3>
              <ul>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Orthopaedics
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Cardiology
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Neurology
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Oncology
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">
                Medical Tourism Destinations
              </h3>
              <ul>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    India
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Malaysia
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Thailand
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    Singapore
                  </Link>
                </li>
                <li className="custom-list-item mb-2">
                  <Link to="#" className="hover:underline">
                    UAE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-6 pt-6 text-center">
            <div className=" text-white pt-10">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="flex justify-center md:justify-start">
                    <img src="./images/Logo.png" alt="Logo" className="w-56" />
                  </div>
                  <div className="text-left col-span-2">
                    <h3 className="text-lg font-bold mb-4 ">
                      About Aafiya Meditreats
                    </h3>
                    <p className="text-sm mb-4">
                      Aafiya Meditreats is a free, confidential, independent
                      resource for patients and industry providers. Our mission
                      is to provide a central portal where patients, Medical
                      Tourism providers, hospitals, clinics, employers, and
                      insurance companies can all find the information they
                      need. Our site focuses on patients looking for specific
                      knowledge in the fields of medical tourism, dental
                      tourism, and health tourism.
                    </p>
                  </div>
                  <div className="">
                    <h3 className="text-lg font-bold mb-4">Follow Us On</h3>
                    <ul className="flex justify-center gap-6">
                      <li>
                        <Link to="#">
                          <FaFacebookSquare color="blue" size={20} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaTwitterSquare color="blue" size={20} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaSquareInstagram color="red" size={20} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <IoLogoYoutube color="red" size={20} />
                        </Link>
                      </li>
                    </ul>
                    <p className="mt-4">
                      <strong>Customer Service</strong>
                      <br />
                      <span className="text-[#2CAFF9] text-xl font-bold">
                        +91 9856555666
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="flex justify-between bg-[#39B5FA] border-t border-gray-700 p-4  text-center text-white">
          <p>
            © 2020 Aafiya Meditreats. All Rights Reserved. Designed by
            Ideamagix.
          </p>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="#" className="hover:underline">
                Terms And Conditions
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
