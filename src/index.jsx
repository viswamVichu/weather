import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./components/Weather/Weather";

const AppLay = () => {
  return (
    <>
      <Weather />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLay />);
