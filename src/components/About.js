import React from "react";
import Image from "../assets/img/greenimg.png";
const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24 ">
          <img
            className="object-cover shadow-lg rounded-full max-w-full scale-75  border-none h-full"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Vaishnavi Phirkoj
              </h2>
              <p className="mb-4 text-green-500">Backend Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Talented backend developer adept at contributing to highly
                collaborative work environment, finding solution and determining
                customer statisfaction. <br />
                <br />
                Designed and developed web applications across multiple APIs,
                third-party integrations and databases. Passionate and
                hardworking with penchant for developing customized interfaces
                that factor in unique demands for accessibility, reachability
                and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
