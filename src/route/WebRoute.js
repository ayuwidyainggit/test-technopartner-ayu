import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginUser from "../auth/LoginUser";
import Home from "../view/Home";
import MenuHidangan from "../view/MenuHidangan";
import Paragraph from "../view/Paragraph";

const WebRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/test-technopartner" element={<LoginUser />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<MenuHidangan />} />
          <Route path="/paragraph" element={<Paragraph />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default WebRoute;
