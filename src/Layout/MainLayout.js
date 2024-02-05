import React, { useState } from "react";
import home from "../assets/home1.png";
import home2 from "../assets/home2.png";
import menu from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import { useNavigate } from "react-router-dom";

const MainLayout = (props) => {
  const navigate = useNavigate();
  const [isHomeClicked, setIsHomeClicked] = useState(true);
  const [isMenuClicked, setIsMenulicked] = useState(false);

  const handleHomeClick = () => {
    setIsHomeClicked(true);
    setIsMenulicked(false);
    navigate("/home");
  };

  const handleMenuClick = () => {
    setIsMenulicked(true);
    setIsHomeClicked(false);
    navigate("/menu");
  };

  return (
    <React.Fragment>
      <div className="min-h-screen flex flex-col relative bg-gray-100">
        <div className="flex-1 overflow-y-auto h-auto pb-[7rem]">
          {props.children}
        </div>
        <div className="fixed bottom-0 w-full bg-white border-t border-gray-100">
          <div className=" py-4 px-4 flex justify-around items-center sm:hidden shadow-md">
            <img
              src={isHomeClicked ? home : home2}
              alt="home"
              className="w-[30px]"
              onClick={handleHomeClick}
            />
            <img
              src={isMenuClicked ? menu : menu2}
              alt="menu"
              className="w-[30px]"
              onClick={handleMenuClick}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
