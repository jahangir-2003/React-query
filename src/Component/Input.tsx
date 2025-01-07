import React from "react";

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className="border-2 border-slate-400 w-full focus:outline-none p-2 rounded-md"
    />
  );
};

export default Input;
