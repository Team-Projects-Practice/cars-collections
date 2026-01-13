import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./MainLyaout";
import About from "./Pages/About";
import "./App.scss";



function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />


      </Route>
    </Routes>
    </div>
  );
}

export default App;
