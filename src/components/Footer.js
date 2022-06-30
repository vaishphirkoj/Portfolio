import React from "react";

// import social data
import { social } from "../data";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-green-500 text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            {/* <img src={Logo} alt="" /> */}
            <h2 className="text-white press ml-8">MADE WITH 💚</h2>
          </div>
          <p className="text-paragraph opacity-80 text-[15px]">
            &copy; 2022 Vaishnavi Phirkoj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
