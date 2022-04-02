import React from "react";

function InputField({ type, name, inputId, placeholder }) {
  return (
    <div className="input-container flex flex-col gap-y-2 my-4 mx-auto w-80p">
      <label htmlFor={inputId}>{name}</label>
      <input
        className="input-field"
        type={type}
        id={inputId}
        placeholder={placeholder}
      />
    </div>
  );
}

export { InputField };
