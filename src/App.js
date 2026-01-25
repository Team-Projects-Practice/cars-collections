import React from "react";
import './App.scss';
import Header from"./Components/Header/Header"
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from"../src/Components/Footer/Footer"
function App() {
  return (
  <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/contact" element={<Contact />} />
  </Routes>
    <Footer/>
  </div>
);
}

export default App;
