import { Navbar } from "@/organisms";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex-1 margin-max-screen py-10">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
