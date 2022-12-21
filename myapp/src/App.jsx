import React from "react";
import ColorRect from "./components/ColorRect";
import InputBar from "./components/InputBar";
import "./styles/style.scss";

const App = () => {
  return (
    <>
      <div className='p-container'>
        <p>Type Color</p>
        <ColorRect />
      </div>
      <InputBar />
    </>
  );
};

export default App;
