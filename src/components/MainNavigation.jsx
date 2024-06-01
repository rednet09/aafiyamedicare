import React, { useState } from "react";
import { Link } from "react-scroll";

function Navigation() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="flex flex-wrap justify-center space-x-4 mb-8 border-blue-200">
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          to={link.target}
          smooth={true}
          duration={500}
          className={`cursor-pointer hover:text-blue-700 ${
            activeLink === index ? "text-blue-500 underline" : ""
          }`}
          onClick={() => handleLinkClick(index)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

const navigationLinks = [
  { label: "Overview", target: "overview" },
  { label: "Eligibility", target: "eligibility" },
  { label: "Preparation", target: "preparation" },
  { label: "About", target: "about" },
  { label: "Post-Treatment", target: "post-treatment" },
  { label: "Recovery Tips", target: "recovery-tips" },
  { label: "FAQs", target: "faqs" },
  { label: "Patient Stories & Videos", target: "stories-videos" },
];

export default Navigation;
