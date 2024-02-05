// src/components/InputField.js
import React from "react";

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="px-4 py-2   rounded-xl focus:outline-none focus:border-gray-500 bg-white shadow-lg"
    />
  );
};

export default InputField;
