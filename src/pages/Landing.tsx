import React from "react";

const Landing: React.FunctionComponent = () => {
  return (
    <div className="h-full w-full">
      <div className="grid h-full place-items-center">
        <p className="text-white text-2xl font-medium w-[800px] text-center">
          Welcome to the{" "}
          <span className="font-bold bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">
            Weather forecast web application
          </span>
          . Please login with your github user to use the application and view
          the weather in your city.
        </p>
      </div>
    </div>
  );
};

export default Landing;
