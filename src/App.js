
import './App.scss';
import Header from"./Components/Header/Header"
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import Footer from './Components/Footer/Footer';
import { Routes,Route } from "react-router-dom";
 function App() {
  return (
    <div className="App">
   <Header/>
      <Routes>
       <Route path='/home' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes> 
  <Footer/>
  
    </div>
  );
}

export default App;
