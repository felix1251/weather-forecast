import { Button } from "@/atoms";
import { User, useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Landing: React.FunctionComponent = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0<User>();

  return (
    <div className="grid h-full place-items-center">
      {isAuthenticated && user ? (
        <div>{user.name}</div>
      ) : (
        <div className="flex flex-col gap-10">
          <p className="text-white text-[1.5rem] font-medium w-[900px]">
            Hi <span className="text-3xl">👋</span>, welcome to the{" "}
            <span className="font-bold bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">
              Weather Forecast Web Application
            </span>{" "}
            <span className="text-3xl">⛅</span>. Please login with your Github
            account to use the application and view the weather in your city.
          </p>
          <Button onClick={() => loginWithRedirect()}>
            <FaGithub className="text-xl" />
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default Landing;
