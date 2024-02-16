import { MainLayout } from "@/templates";
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Landing = React.lazy(() => import("@/pages/Landing"));
const CityWeatherInfo = React.lazy(() => import("@/pages/CityWeatherInfo"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Landing />} />
      <Route path="city-wheather/:city" element={<CityWeatherInfo />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />;
    </Auth0Provider>
  );
}

export default App;