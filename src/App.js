import React from "react";

import "./App.css";

import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
 

export default function App() { 
  return (
<div className="App">
      <TransformWrapper
        minScale={0.01}
        maxScale={10}
        initialScale={1}
        centerOnInit={true}
      centerZoomedOut={true}
      >
        <Controls />
        <div className="fullScreenImage">

          <TransformComponent wrapperClass="wrapper" contentClass="content">
            <img
              className="tae"
              height="100%"
              width={"100%"}
              src="https://res.cloudinary.com/siyam/image/upload/w_450/v1714969978/portfolio/images/trndvbj0piqjmueg75vi.jpg"
              alt="test 2"
            />

          </TransformComponent>
        </div>
      </TransformWrapper>
    </div>
  );
}
const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div  className="tool">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>Reset</button>
    </div>
  );
};
