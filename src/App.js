import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./MainLyaout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
