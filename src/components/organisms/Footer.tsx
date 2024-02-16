import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="py-7 flex items-center">
      <div className="margin-max-screen flex items-center justify-between">
        <h3 className="text-lg text-secondary-light">
          {new Date().getFullYear()} @felix pages
        </h3>
        <div className="flex gap-4">
          <a
            href="https://github.com/felix1251"
            className="text-[1.6rem] text-secondary-light hover:text-primary"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/fabacajen"
            className="text-[1.6rem] text-secondary-light hover:text-primary"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
