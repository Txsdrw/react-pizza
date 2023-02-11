import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartEmpty from "./pages/CartEmpty";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Empty",
    element: <CartEmpty />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
