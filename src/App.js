import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import AddNew from "./components/pages/AddNew";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/addnew" Component={AddNew} />
          <Route path="/products" Component={Products} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
