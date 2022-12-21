import React, { useState } from "react";

const InputBar = ({ colorValue }) => {
  const [activeColor, setActiveColor] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    colorValue(value);
  };

  return (
    <>
      <div className='c-input__wrap'>
        <input type='text' className='c-input' onChange={handleChange} value={activeColor} />
      </div>
    </>
  );
};

export default InputBar;
