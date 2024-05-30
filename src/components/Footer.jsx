import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <section>
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
      </section>
    </>
  );
};

export default Footer;
