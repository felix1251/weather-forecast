import React from "react";

const Navbar: React.FunctionComponent = () => {
  return (
    <header className="w-full h-20 flex items-center">
      <div className="margin-max-screen">
        <h2 className="text-primary font-bold text-3xl">Weather Forecast</h2>
      </div>
    </header>
  );
};

export default Navbar;
