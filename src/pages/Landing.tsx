import { LandingInfo } from "@/components/molecules";
import { User, useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Landing: React.FunctionComponent = () => {
  const { user, isAuthenticated } = useAuth0<User>();

  return (
    <div className="grid h-full place-items-center">
      {isAuthenticated && user ? <div>{user.name}</div> : <LandingInfo />}
    </div>
  );
};

export default Landing;
