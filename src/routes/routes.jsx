import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("@/views/Home"));
const Search = lazy(() => import("@/views/Search"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/s/:searchTerm",
    element: <Search />,
  },
]);

export default router;
