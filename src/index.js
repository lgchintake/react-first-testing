import React from "react";
import ReactDOM from "react-dom/client";
import { CategoryListComponent } from "./components/CategoryListComponent.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoryListComponent />
  </React.StrictMode>
);
