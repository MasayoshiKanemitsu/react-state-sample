import React from "react";

const ColorRect = ({ color }) => {
  return (
    <>
      <div className='c-colorRect' style={{ background: color }}></div>
    </>
  );
};

export default ColorRect;
