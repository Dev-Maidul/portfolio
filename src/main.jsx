import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './app.css'
import { router } from "./Router/Routes.jsx";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex justify-center items-center">
      <div className="w-10/12">
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>
);
