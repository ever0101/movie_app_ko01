import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Pomme from "./Pomme";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Pomme /> */}
    {/* component: HTMl을 반환하는 함수 */}
  </React.StrictMode>, //React.StrictMode가 one component여서 두 개 해도 되는건가?
  document.getElementById("root")
);
