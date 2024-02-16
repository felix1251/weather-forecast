import { LoadingIndicator } from "@/atoms";
import { Footer, Navbar } from "@/organisms";
import { useAuth0 } from "@auth0/auth0-react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Navbar />
      <div className="flex-1 margin-max-screen py-10 relative">
        <Suspense fallback={<LoadingIndicator />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
