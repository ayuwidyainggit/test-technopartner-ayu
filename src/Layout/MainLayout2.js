import React, { useState } from "react";
import home from "../assets/home1.png";
import home2 from "../assets/home2.png";
import menu from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import Navbar from "../components/Navbar";

const MainLayout2 = (props) => {
  const [isHomeClicked, setIsHomeClicked] = useState(false);

  const handleHomeClick = () => {
    setIsHomeClicked(true);
  };

  const handleMenuClick = () => {
    setIsHomeClicked(false);
  };

  return (
    <React.Fragment>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <div className="flex-1">
          <p className="text-black">kenapa ga muncul </p>
        </div>
        <div className="bg-white py-4 px-4 flex justify-around items-center sm:hidden shadow-md">
          <img
            src={isHomeClicked ? home : home2}
            alt="home"
            className="w-[30px]"
            onClick={handleHomeClick}
          />
          <img
            src={isHomeClicked ? menu2 : menu}
            alt="menu"
            className="w-[30px]"
            onClick={handleMenuClick}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayout2;
