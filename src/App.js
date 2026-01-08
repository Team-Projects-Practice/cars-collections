import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./MainLyaout";
import About from "./Pages/About";



function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />


      </Route>
    </Routes>
  );
}

export default App;
