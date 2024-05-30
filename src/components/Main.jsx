import { useState } from "react";
const Main = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <section className="bg-white shadow">
        <nav className="container mx-auto p-4">
          <ul className="flex space-x-4">
            <li
              className={`cursor-pointer ${
                activeSection === "overview" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleSectionClick("overview")}
            >
              Overview
            </li>
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
      </section>
    </>
  );
};

export default Main;
