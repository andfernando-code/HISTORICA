import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import AddNew from "./components/pages/AddNew";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/addnew" Component={AddNew} />
          <Route path="/products" Component={Products} />
          <Route path="/sign-up" Component={SignUp}/>
          <Route path="/Login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
