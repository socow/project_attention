import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { firestore } from "./firebase";
import { GoogleOAuthProvider } from "@react-oauth/google";
console.log(firestore);
const googleOauthClientId = process.env.REACT_APP_CLIENT_ID;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GoogleOAuthProvider clientId={googleOauthClientId}>
        <App />
      </GoogleOAuthProvider>
    </RecoilRoot>
  </React.StrictMode>
);
