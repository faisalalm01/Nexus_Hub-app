import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/_NotFound/NotFound";
import "../index.css";
import Profile from "../pages/Profile/Profile";

const RoutePath = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutePath;
