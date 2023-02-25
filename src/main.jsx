import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import RouteProvider from "./providers/RouteProvider";
import StoreProvider from "./providers/StoreProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>Loading...</div>}>
    <StoreProvider>
      <RouteProvider />
    </StoreProvider>
  </Suspense>
);
