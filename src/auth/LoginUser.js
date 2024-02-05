import React, { useState } from "react";
import logo from "../assets/logo_technopartner.png";
import InputField from "../components/InputField";
import { Text1 } from "../components/Text";
import { Button1 } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/login/AuthAction";

const LoginUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    dispatch(login(username, password));
  };
  if (isAuthenticated) {
    // Redirect to /admin if authenticated
    return navigate("/home");
  }
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12  flex justify-center items-center h-[280px]">
        <img src={logo} alt="logo" className="w-[70%]" />
      </div>
      <div className="col-span-12 ">
        <div className="flex justify-center">
          <Text1 text="Email" />
        </div>
        <div className="flex justify-center mt-2">
          <InputField
            type="text"
            placeholder="Enter email..."
            value={username}
            onChange={handleUsername}
          />
        </div>
      </div>
      <div className="col-span-12 ">
        <div className="flex justify-center ">
          <Text1 text="Password" />
        </div>
        <div className="flex justify-center mt-2">
          <InputField
            type="password"
            placeholder=""
            value={password}
            onChange={handlePassword}
          />
        </div>
      </div>
      <div className=" col-span-12 flex justify-center mt-2">
        <Button1 text="Login" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default LoginUser;
