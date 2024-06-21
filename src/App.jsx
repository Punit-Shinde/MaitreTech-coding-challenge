import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CheckOutPage from "./pages/CheckOutPage";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/menu" element={<MenuPage />} />
        <Route exact path="/checkout" element={<CheckOutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
