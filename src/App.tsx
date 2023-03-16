import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Nav from "./components/Nav";
import NewPostPage from "./pages/NewPostPage";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<NewPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
