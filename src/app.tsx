import { MainLayout } from "@/templates";
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Landing = React.lazy(() => import("@/pages/Landing"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Landing />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
