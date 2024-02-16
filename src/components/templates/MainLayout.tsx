import { Footer, Navbar } from "@/organisms";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex-1 margin-max-screen py-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
