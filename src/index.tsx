import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from "./firebase";
import { RecoilRoot } from "recoil";
console.log(firebase);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
