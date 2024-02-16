import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  return (
    <header className="w-full h-20 flex items-center bg-secondary shadow-md">
      <div className="margin-max-screen">
        <Link
          to="/"
          className="bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text font-bold text-3xl"
        >
          Weather Forecast
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
