import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "./components/sign";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
