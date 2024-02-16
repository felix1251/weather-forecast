import React from "react";
import { IoCloud } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  return (
    <header className="w-full h-20 flex items-center bg-secondary shadow-md">
      <div className="margin-max-screen">
        <Link to="/" className="flex gap-4 items-center">
          <IoCloud className="text-primary text-4xl" />
          <h2 className="text-[1.7rem] bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text font-bold">
            Weather Forecast
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
