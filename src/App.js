import React from "react";
import './App.scss';
import Header from"./Components/Header/Header"
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);
}

export default App;
