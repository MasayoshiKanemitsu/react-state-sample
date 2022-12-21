import React, { useState } from "react";
import ColorRect from "./components/ColorRect";
import InputBar from "./components/InputBar";
import "./styles/style.scss";

const App = () => {
  const [UIcolor, setUIcolor] = useState();

  //Get color value
  const getColor = (color) => {
    setUIcolor(color);
  };

  return (
    <>
      <div className='p-container'>
        <p>Type your color</p>
        <ColorRect color={UIcolor} />
        {/* <ColorRect color={"violet"} /> */}
        <InputBar colorValue={getColor} />
      </div>
    </>
  );
};

export default App;
