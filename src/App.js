import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from"./Components/Header/Header.jsx"
import Home from "./Components/Pages/Home/Home";
import Contact from"./Components/Pages/Contact/Contact.jsx"

function App() {
  return (
    <>
    <Header/>

     <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

    
  );
}

export default App;
