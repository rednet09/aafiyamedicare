// import { useState } from "react";
import { Link, Element } from "react-scroll";

const Main = () => {
  // const [activeSection, setActiveSection] = useState("overview");

  // const handleSectionClick = (section) => {
  //   setActiveSection(section);
  // };
  return (
    <>
      {/* <section className="bg-white shadow">
        <nav className="container mx-auto p-4">
          <ul className="flex space-x-4">
            <Link to="overview">
              <li
                className={`cursor-pointer ${
                  activeSection === "overview"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleSectionClick("overview")}
              >
                Overview
              </li>
            </Link>
            <Link to="#eligibility">
              <li
                className={`cursor-pointer ${
                  activeSection === "eligibility"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleSectionClick("eligibility")}
              >
                Eligibility
              </li>
            </Link>
            <li
              className={`cursor-pointer ${
                activeSection === "preparation"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
              onClick={() => handleSectionClick("preparation")}
            >
              Preparation
            </li>
            <li
              className={`cursor-pointer ${
                activeSection === "about-treatment"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
              onClick={() => handleSectionClick("about-treatment")}
            >
              About Treatment
            </li>
            <li
              className={`cursor-pointer ${
                activeSection === "post-treatment"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
              onClick={() => handleSectionClick("post-treatment")}
            >
              Post Treatment
            </li>
            <li
              className={`cursor-pointer ${
                activeSection === "recovery-tips"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
              onClick={() => handleSectionClick("recovery-tips")}
            >
              Recovery Tips
            </li>
            <li
              className={`cursor-pointer ${
                activeSection === "faqs" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleSectionClick("faqs")}
            >
              FAQs
            </li>
            <li
              className={`cursor-pointer ${
                activeSection === "stories" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleSectionClick("stories")}
            >
              Stories
            </li>
            <li
              className={`cursor-pointer ${
                activeSection === "doctors" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleSectionClick("doctors")}
            >
              Doctors
            </li>
            <li
              className={`cursor-pointer ${
                activeSection === "hospitals"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
              onClick={() => handleSectionClick("hospitals")}
            >
              Hospitals
            </li>
          </ul>
        </nav>

        <div className="container mx-auto px-4 py-8">
          <section id="overview" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Treatment Overview.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-sm mb-4">
                  Lorem incididunt ut labore ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <p className="text-sm mb-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="text-sm mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Treatment Overview"
                  className="w-full"
                />
              </div>
            </div>
          </section>

          <section id="" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Eligibility For Treatment.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-sm mb-4">
                  Any individual who has tried diet and exercise but failed to
                  lose weight is considered as a good candidate for gastric
                  bypass. Although gastric bypass aids in weight loss, it is not
                  an appropriate option for everyone.
                </p>
                <ul className="list-disc list-inside">
                  <li>The BMI (body mass index) is 40 or more</li>
                  <li>
                    Your BMI is 30 or more with severe weight-related health
                    conditions like type-2 diabetes and high blood pressure
                  </li>
                  <li>
                    You are willing to make permanent changes in the lifestyle
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      id="fullName"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      id="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="description"
                    >
                      Describe Your Treatment Requirement
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="description"
                      rows="3"
                      placeholder="Describe Your Treatment Requirement"
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Preparation Before Treatment.
            </h2>
            <p className="text-sm mb-4">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone.
            </p>
            <ul className="list-disc list-inside">
              <li>The BMI (body mass index) is 40 or more</li>
              <li>
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </li>
              <li>
                You are willing to make permanent changes in the lifestyle
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About Treatment.</h2>
            <p className="text-sm mb-4">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone.
            </p>
            <ul className="list-disc list-inside">
              <li>The BMI (body mass index) is 40 or more</li>
              <li>
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </li>
              <li>
                You are willing to make permanent changes in the lifestyle
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Post-Treatment Care Treatment.
            </h2>
            <p className="text-sm mb-4">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone.
            </p>
            <ul className="list-disc list-inside">
              <li>The BMI (body mass index) is 40 or more</li>
              <li>
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </li>
              <li>
                You are willing to make permanent changes in the lifestyle
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Treatment Recovery Tips.
            </h2>
            <p className="text-sm mb-4">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone.
            </p>
            <ul className="list-disc list-inside">
              <li>The BMI (body mass index) is 40 or more</li>
              <li>
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </li>
              <li>
                You are willing to make permanent changes in the lifestyle
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Treatment FAQs.</h2>
            <div>
              <details className="mb-4">
                <summary className="cursor-pointer">
                  How do I know the clinic I am searching is verified?
                </summary>
                <p className="ml-4 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer">
                  I can't travel alone so can some family member or friend of
                  mine accompany me?
                </summary>
                <p className="ml-4 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer">
                  Can I see my doctor before I decide and what about my post
                  recovery?
                </summary>
                <p className="ml-4 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer">
                  How do I share my reports and medical cases with the clinic of
                  my choice?
                </summary>
                <p className="ml-4 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </details>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Patient Stories & Videos.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2">
                  Underwent procedure for retinal detachment
                </h3>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Patient Story"
                  className="mb-4"
                />
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="font-bold">Luke Olfert</p>
                <p>New York, USA</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2">
                  Underwent Colonoscopy and Medical Management
                </h3>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Patient Story"
                  className="mb-4"
                />
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="font-bold">Luke Olfert</p>
                <p>Sydney, Australia</p>
              </div>
            </div>
          </section>
        </div>
      </section> */}
      <div className="container mx-auto px-20 py-8">
        <nav className="flex justify-center space-x-4 mb-8">
          <Link
            to="overview"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
          >
            Overview
          </Link>
          <Link
            to="eligibility"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
          >
            Eligibility
          </Link>
          <Link
            to="preparation"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
          >
            Preparation
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
          >
            About
          </Link>
          <Link
            to="post-treatment"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
          >
            Post-Treatment
          </Link>
          <Link
            to="recovery-tips"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
          >
            Recovery Tips
          </Link>
          <Link
            to="faqs"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
          >
            FAQs
          </Link>
          <Link
            to="stories-videos"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
          >
            Patient Stories & Videos
          </Link>
        </nav>

        <Element name="overview">
          <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-dotted border-b-2 border-sky-500">
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Treatment Overview.</h2>
              <div>
                <p className="text-sm mb-4">
                  Lorem incididunt ut labore ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <p className="text-sm mb-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
                <p className="text-sm mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center p-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/175/932/original/a-doctor-is-treating-a-patient-lying-in-a-hospital-bed-vector.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        </Element>

        <Element name="eligibility">
          <section className="mb-8 border-dotted border-b-2 border-sky-500 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Eligibility For Treatment.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-sm mb-4">
                  Any individual who has tried diet and exercise but failed to
                  lose weight is considered as a good candidate for gastric
                  bypass. Although gastric bypass aids in weight loss, it is not
                  an appropriate option for everyone.
                </p>
                <ul className="list-disc list-inside">
                  <li>The BMI (body mass index) is 40 or more</li>
                  <li>
                    Your BMI is 30 or more with severe weight-related health
                    conditions like type-2 diabetes and high blood pressure
                  </li>
                  <li>
                    You are willing to make permanent changes in the lifestyle
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      id="fullName"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      id="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="description"
                    >
                      Describe Your Treatment Requirement
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="description"
                      rows="3"
                      placeholder="Describe Your Treatment Requirement"
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </section>
        </Element>

        <Element name="preparation">
          <section className="mb-8 border-dotted border-b-2 border-sky-500 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Preparation Before Treatment.
            </h2>
            <p className="text-sm mb-4">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone.
            </p>
            <ul className="list-disc list-inside">
              <li>The BMI (body mass index) is 40 or more</li>
              <li>
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </li>
              <li>
                You are willing to make permanent changes in the lifestyle
              </li>
            </ul>
          </section>
        </Element>

        <Element name="about">
          <section className="mb-8 border-dotted border-b-2 border-sky-500 p-4">
            <h2 className="text-2xl font-bold mb-4">About Treatment.</h2>
            <p className="text-sm mb-4">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone.
            </p>
            <ul className="list-disc list-inside">
              <li>The BMI (body mass index) is 40 or more</li>
              <li>
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </li>
              <li>
                You are willing to make permanent changes in the lifestyle
              </li>
            </ul>
          </section>
        </Element>

        <Element name="post-treatment">
          <section className="mb-8 border-dotted border-b-2 border-sky-500 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Post-Treatment Care Treatment.
            </h2>
            <p className="text-sm mb-4">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone.
            </p>
            <ul className="list-disc list-inside">
              <li>The BMI (body mass index) is 40 or more</li>
              <li>
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </li>
              <li>
                You are willing to make permanent changes in the lifestyle
              </li>
            </ul>
          </section>
        </Element>

        <Element name="recovery-tips">
          <section className="mb-8 border-dotted border-b-2 border-sky-500 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Treatment Recovery Tips.
            </h2>
            <p className="text-sm mb-4">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone.
            </p>
            <ul className="list-disc list-inside">
              <li>The BMI (body mass index) is 40 or more</li>
              <li>
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </li>
              <li>
                You are willing to make permanent changes in the lifestyle
              </li>
            </ul>
          </section>
        </Element>

        <Element name="faqs">
          <section className="mb-8 border-dotted border-b-2 border-sky-500 p-4">
            <h2 className="text-2xl font-bold mb-4">Treatment FAQs.</h2>
            <div className="space-y-4">
              <div>
                <button
                  className="w-full text-left py-2 border-b"
                  type="button"
                >
                  <span className="font-bold">+</span> How do I know the clinic
                  I am searching is verified?
                </button>
              </div>
              <div>
                <button
                  className="w-full text-left py-2 border-b"
                  type="button"
                >
                  <span className="font-bold">+</span> I can't travel alone so
                  can some family member or friend of mine accompany me?
                </button>
              </div>
              <div>
                <button
                  className="w-full text-left py-2 border-b"
                  type="button"
                >
                  <span className="font-bold">+</span> Can I see my doctor
                  before I decide and what about my post recovery?
                </button>
              </div>
              <div>
                <button
                  className="w-full text-left py-2 border-b"
                  type="button"
                >
                  <span className="font-bold">+</span> How do I share my reports
                  and medical cases with the clinic of my choice?
                </button>
              </div>
            </div>
          </section>
        </Element>

        <Element name="stories-videos">
          <section className="mb-8 border-dotted border-b-2 border-sky-500 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Patient Stories & Videos.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2">
                  Underwent procedure for retinal detachment
                </h3>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Patient Story"
                  className="mb-4"
                />
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="font-bold">Luke Olfert</p>
                <p>New York, USA</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2">
                  Underwent Colonoscopy and Medical Management
                </h3>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Patient Story"
                  className="mb-4"
                />
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="font-bold">Luke Olfert</p>
                <p>Sydney, Australia</p>
              </div>
            </div>
          </section>
        </Element>
      </div>
    </>
  );
};

export default Main;
