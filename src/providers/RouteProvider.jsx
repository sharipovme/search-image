import { RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";
import router from "../routes/routes";

export default function RouteProvider({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}

RouteProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
