import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const authenticated: React.FunctionComponent = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated === undefined) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default authenticated;
